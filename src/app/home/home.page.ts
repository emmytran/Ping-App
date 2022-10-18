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
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, 
         AngularFirestoreCollection
} from '@angular/fire/firestore';
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
    this.loadContacts();
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
    this.afAuth.auth.signInAnonymously().then(res => {
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
  updateMap(locations: any) {
    throw new Error('Method not implemented.');
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
}