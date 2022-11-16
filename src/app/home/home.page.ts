import { Component, ElementRef, NgProbeToken, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../services/database.service';
//Push Notification
import{
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
//Geolocation
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, 
         AngularFirestoreCollection
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  contacts = [];
  export = null;
  newContacts = 'New Contacts';
  
  //Firebase data
  locations: Observable<any>
  locationsCollection: AngularFirestoreCollection<any>;
  //Map related
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker = [];
  //Misc
  isTracking = false;
  watch: string;
  user = null;

  ngOnInit() {
    console.log('Initializing HomePage');

    //Request permission to use push notifications
    //Ios will prompt user and return if they are granted permisson or not
    //Android will just grant permisson without prompting
    PushNotifications.requestPermissions().then(result => {
      if(result.receive === 'granted') {
        //Register with Apple / Google to recieve push via APNS/FCM
        PushNotifications.register();
      }else {
        //Show some error
      }
    });
    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
    });
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push  receive: ' + JSON.stringify(notification));
      },
    );
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }

  constructor(private databaseService: DatabaseService, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
  //Database setup  
    //this.loadContacts();
    //Geolocation setup
  this.anonLogin();
  }
  loadContacts(){
    this.databaseService.getContactsList().subscribe(res => {
      this.contacts = res.value;
    });
  }

  async createExport(mode) {
    const dataExport = await this.databaseService.getDatabaseExport(mode);
    this.export = dataExport.export;
  }

  async addContacts() {
    await this.databaseService.addNewContacts(this.newContacts);
    this.newContacts = '';
    this.loadContacts();
  }
  
  async deleteContacts(contacts){
    await this.databaseService.deleteContacts(contacts.id);
    this.contacts = this.contacts.filter(c => c != contacts)
  }
  //Geolocation main setup
  ionViewWillEnter() {
    this.loadMap();
  }
  //Makesure an anonymous login and load data
  anonLogin(){
    this.afAuth.signInAnonymously().then(res => {
      this.user = res.user;

      this.locationsCollection = this.afs.collection(
        'locations/${this.user.uid}/track',
        ref => ref.orderBy('timestamp')
      );
      
      //Make sure we also get the Firebase item ID!
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
      //Update Map maker on every change
      this.locations.subscribe(locations => {
        this.updateMap(locations);
      });
    });
  }
  //Initialize a blank map
  loadMap() {
    let latlng = new google.maps.LatLng(51.9036442, 7.6683267);

    let mapOptions = {
      center: latlng,
      zoom: 5,
      mapTypdId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  // Use Capacitor to track our geolocation
startTracking() {
  this.isTracking = true;
  this.watch = Geolocation.watchPosition({}, (position, err) => {
    if (position) {
      this.addNewLocation(
        position.coords.latitude,
        position.coords.longitude,
        position.timestamp
      );
    }
  });
}

// Unsubscribe from the geolocation watch using the initial ID
stopTracking() {
  Geolocation.clearWatch({ id: this.watch }).then(() => {
    this.isTracking = false;
  });
}

// Save a new location to Firebase and center the map
addNewLocation(lat, lng, timestamp) {
  this.locationsCollection.add({
    lat,
    lng,
    timestamp
  });

  let position = new google.maps.LatLng(lat, lng);
  this.map.setCenter(position);
  this.map.setZoom(5);
}

// Delete a location from Firebase
deleteLocation(pos) {
  this.locationsCollection.doc(pos.id).delete();
}

// Redraw all markers on the map
updateMap(locations) {
  // Remove all current marker
  this.marker.map(marker => marker.setMap(null));
  this.marker = [];

  for (let loc of locations) {
    let latLng = new google.maps.LatLng(loc.lat, loc.lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.marker.push(marker);
  }
}
}