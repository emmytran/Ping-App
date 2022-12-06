import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {Contact, Contacts, ContactType, EmailAddress, NewContact, PhoneNumber} from '@capacitor-community/contacts';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end

@Injectable()
export class syncContacts {
  contacts: Observable<Contact[]>;
  public message: any = "I'm new here";
  constructor(private toastController: ToastController, private alertController: AlertController, private androidPermissions: AndroidPermissions) {
  }
  setMessage(message) {
    this.message = message;
  }
  //Invokes android permissions for Contacts
  async getContactPermissions(): Promise<void> {
    console.log('button clicked');
    Contacts.getPermissions();
  }
  //Grab phone contacts
  async getContacts(): Promise<void> {
     Contacts.getContacts().then(result => {
        console.log('result is:' , result);
        const phoneContacts: Contact[] = result.contacts;
        //Sort phone contacts by display name
        phoneContacts.sort((a, b) => a.displayName.localeCompare(b.displayName))
        this.contacts = of(phoneContacts);
     });
   }

  //Checks contact permissions for app
  checkContactsPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(
      result => {
                  //Send messages if SMS permissions are enabled
                  if (result.hasPermission == true) {
                    console.log("Has Contact permissions... grabbing contacts")
                    this.getContacts();
                  }
                  //Request for SMS permissions if disabled
                  else {
                    console.log("Does Not have Contact permissions...")
                    this.contactAlert();
                    this.getContactPermissions();
                 }
                },
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    );
  }

   //Log contact list for testing purposes
   async logTrustList() {
    const myObserver = {
      //Grabs contact list from phone
      next: (myContactList: Contact[]) => {
        for (var myContact of myContactList) {
          //Name of contacts
         console.log("Obrsever Subscribe: " + myContact.displayName)
          for (var myNumber of myContact.phoneNumbers){
            //Mobile phone numbers
            if (myNumber.label == "mobile"){
              console.log("Observer Subscribe: ", myNumber.number);
            }
          }
        }
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.contacts.subscribe(myObserver);
  }

  //Add a contact to trusted list
  async addTrustList(name:string,number:string) {
    //Creates a new Contact
    //var addedName = "Adam Added"
    var addedName = name
    var numberType = "mobile"
    //var addedNumber = "5599876543"
    var addedNumber = number
    
    const newPhonenumber: PhoneNumber = {
      label: numberType,
      number: addedNumber
    }
    //Create a new phonenumber and email address 
    let contactList: PhoneNumber[] = [newPhonenumber];
    var emailList: EmailAddress[];
    var newContact: Contact = {
      contactId: "",
      displayName: addedName,
      phoneNumbers: contactList,
      emails: emailList,
      photoThumbnail: "",
      organizationName: "",
      organizationRole: "",
      birthday: ""
    }
    //Insert new contact into trusted list
    const insert = {
      //Grabs trusted list
      next: (myContactList: Contact[]) => {
        //Inserts new contact into trusted list
        myContactList.push(newContact)
        //Sort Contact list by display name
        myContactList.sort((a, b) => a.displayName.localeCompare(b.displayName))
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.contacts.subscribe(insert);

  }

  //Remove a contact
  async removeTrustList(targetName:string,targetNumber:string) {
  //  var targetName = "Adam Added"
    //var targetNumber = "5599876543"
    var index = 0;
    //Looks for target in trusted list and removes them
    const remove = {
      next: (myContactList: Contact[]) => {
        for (var myContact of myContactList) {
        //Looks for a matching name in trusted list
         if (myContact.displayName == targetName){
          console.log(myContact.displayName + " found at index: " + index)
          //Looks for matching mobile number
            for (var myNumber of myContact.phoneNumbers){
            //Mobile phone numbers
             if (myNumber.label == "mobile" && myNumber.number == targetNumber){
              myContactList.splice(index, 1); // 2nd parameter means remove one item only
              console.log(myNumber.number + " found at index: " + index);
              return
             }
           }
          }
          index++
        }
        console.log("No trusted contact with info: " + targetName + " " + targetNumber);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.contacts.subscribe(remove);
  }
    //Alert for missing contact permission
    async contactAlert() {
        const alert = await this.alertController.create({
          header: 'Contact Syncing Denied',
          subHeader: 'App Permission Missing: Contact Access',
          message: 'Try again after enabling',
          buttons: ['OK'],
        });
    
        await alert.present();
      }
}