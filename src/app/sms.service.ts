import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {Contact, Contacts, ContactType, EmailAddress, NewContact, PhoneNumber} from '@capacitor-community/contacts';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end

@Injectable()
export class mySMS {
//  contacts: Observable<Contact[]>;
  public message: any = "I'm new here";
  constructor(private toastController: ToastController, private alertController: AlertController, private sms: SMS , private androidPermissions: AndroidPermissions) {
  }
  setMessage(message) {
    this.message = message;
  }

  //Send SMS message to trusted list
   async sendSMS(list:Observable<Contact[]>) {
    //var message = "Danger"
    var latitude = "34.0522"
    var longitude = "-118.2437"
    var link = "https://www.google.com/maps/search/?api=1&query=" + latitude + "%2C"+ longitude //Google map url + lat + comman + long
  //  var message = "Hello \n" + "https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393"
    var message = "Current Location \n" + link
    var trustedNumbers = [];
   //Send to multiple numbers
    const sleep = (ms) => new Promise(r => setTimeout(r, ms)); //Need delay between each send to process sent messages
    const grabTrustedList = {
     //Grabs trusted list
     next: (myContactList: Contact[]) => {
       for (var myContact of myContactList) {
         //Name of contact
         console.log("Obrsever Subscribe: " + myContact.displayName)
         for (var myNumber of myContact.phoneNumbers){
            // Grab mobile phone numbers
            if (myNumber.label == "mobile"){
              console.log("Observer Subscribe: ", myNumber.number);
              trustedNumbers.push(myNumber.number)
            }
         }
        }
    },
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
   //this.contacts.subscribe(grabTrustedList);
   list.subscribe(grabTrustedList);

    //Contact each trusted user's
       for(var i = 0; i < trustedNumbers.length; i++) {
        //Arrays don't work, iterate through for loop and send 1 message at a time
        //this.sms.send(trustedNumbers,message)
        this.sms.send(trustedNumbers[i],message)
        await sleep(2000); //delay each message
       }
      console.log("Completed SMS messaging")
   }
  
  //Request for SMS permissions
   async getSMSPermission(): Promise<void> {
     console.log("Requesting SMS permissions...")
     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS) 
  }
  //Checks SMS permissions for app
  checkSMSPermission(list) {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
      result => {
                  //Send messages if SMS permissions are enabled
                  if (result.hasPermission == true) {
                    console.log("Has SMS permissions... sending sms")
                    //Sends SMS to trusted list
                    this.sendSMS(list);
                  }
                  //Request for SMS permissions if disabled
                  else {
                    console.log("Does Not have SMS permissions...")
                    this.SMSAlert();
                    this.getSMSPermission();
                 }
                },
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    );
  }

  //Alert for missing SMS permission
  async SMSAlert() {
    const alert = await this.alertController.create({
      header: 'Ping Denied',
      subHeader: 'App Permission Missing: SMS Access',
      message: 'Try again after enabling',
      buttons: ['OK'],
    });

    await alert.present();
  }
}