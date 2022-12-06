import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

//import {Contact, Contacts, ContactType, EmailAddress, NewContact, PhoneNumber} from '@capacitor-community/contacts';
////import { SMS } from '@awesome-cordova-plugins/sms/ngx';
//import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end
import { mySMS } from '../../sms.service';
import { syncContacts } from '../../contacts.service'

@Component({
  selector: 'app-trusted-lists',
  templateUrl: './trusted-lists.page.html',
  styleUrls: ['./trusted-lists.page.scss'],
})
export class TrustedListsPage implements OnInit {

  
  constructor(
    //private toastController: ToastController, private alertController: AlertController
  // private toastController: ToastController, private alertController: AlertController, private sms: SMS
   //private toastController: ToastController, private alertController: AlertController, private sms: SMS , private androidPermissions: AndroidPermissions, private mySMS: mySMS
  private mySMS: mySMS, private syncContacts: syncContacts
  ) {}

  ngOnInit() {
  }

  
  //Checks Contact permisions for app
  mycheckContactsPermission() {
   this.syncContacts.checkContactsPermission();
  }
   

  //Checks SMS permissions for app
  mycheckSMSPermission() {
    //Passes the trusted contact list as parameter
    this.mySMS.checkSMSPermission(this.syncContacts.contacts)
  }

  async hi() {
    alert("hi")
  }
  
}