import { Component, NgProbeToken, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import{
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  contacts = [];
  export = null;
  newContacts = 'New Contacts';
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

  constructor(private databaseService: DatabaseService) {
    this.loadContacts();
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