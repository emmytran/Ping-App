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
  location: Observable<any>
  locationCollection: AngularFirestoreCollection<any>;
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
  
}