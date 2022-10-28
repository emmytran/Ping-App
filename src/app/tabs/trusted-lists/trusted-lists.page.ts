import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {Contact, Contacts, ContactType, EmailAddress, NewContact, PhoneNumber} from '@capacitor-community/contacts';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';


@Component({
  selector: 'app-trusted-lists',
  templateUrl: './trusted-lists.page.html',
  styleUrls: ['./trusted-lists.page.scss'],
})
export class TrustedListsPage implements OnInit {

  contacts: Observable<Contact[]>;
  constructor(
    //private toastController: ToastController, private alertController: AlertController
  // private toastController: ToastController, private alertController: AlertController, private sms: SMS
  private toastController: ToastController, private alertController: AlertController, private sms: SMS
  ) {}

  ngOnInit() {
  }

  async getPermissions(): Promise<void> {
    console.log('button clicked');
    Contacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    // console.log('tesbutton clicked');
     Contacts.getContacts().then(result => {
        console.log('result is:' , result);
        const phoneContacts: Contact[] = result.contacts;
      // this.logContact(phoneContacts);
     // this.myContact = phoneContacts;
        //Sort phone contacts by display name
        phoneContacts.sort((a, b) => a.displayName.localeCompare(b.displayName))
        this.contacts = of(phoneContacts);
     });
   }
   //Log contact list for testing purposes
   async logTrustList() {
    const myObserver = {
      //Grabs contact list from phone
      next: (myContactList: Contact[]) => {
        for (var myContact of myContactList) {
          //Name of contacts
         // console.log(typeof myContact)
        // myContactList.push(this.newContact)
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
  async addTrustList() {
    //Creates a new Contact
    var addedName = "Adam Added"
    var numberType = "mobile"
    var addedNumber = "5599876543"
    
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
       // console.log("Inserting: " + newContact.displayName)
       // console.log("Inserting: " + newContact.phoneNumbers[0].label + ": " + newContact.phoneNumbers[0].number)
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
  async removeTrustList() {
    var targetName = "Adam Added"
    var targetNumber = "5599876543"
    var index = 0;
    //Looks for target in trusted list and removes them
    const remove = {
      next: (myContactList: Contact[]) => {
        for (var myContact of myContactList) {
          //Name of contacts
         // console.log(typeof myContact)
        // myContactList.push(this.newContact)

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

  async sendSMS() {
    //Arrays don't work, use for loop instead
    var test = ["5555", "5556" ]
    var targetNumber = "5594305550"
    var message = "Hello World yuh"
       // this.sms.send(targetNumber,message)

   //Send to multiple numbers
   //Need delay between each send to process sent messages
    var arr = ["1","2","3"]
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    for(var i = 0; i < arr.length; i++) {
      this.sms.send(arr[i],message)
      //Sleep for 2 seconds
      await sleep(2000);
    }
   // this.sms.send(test,"testing array")

  }
}
