import { Component, OnInit } from '@angular/core';
import { myContact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { syncContacts } from 'src/app/contacts.service';
import {Contact, Contacts, ContactType, EmailAddress, NewContact, PhoneNumber} from '@capacitor-community/contacts';

//import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end

@Component({
  selector: 'app-trusted-lists',
  templateUrl: './trusted-lists.page.html',
  styleUrls: ['./trusted-lists.page.scss'],

})

export class TrustedListsPage implements OnInit {
  contactItems$: Observable<myContact[]>;
  idValue = 1
  COPY = false
  constructor(
    private contactService: ContactService,
    private alertCtrl: AlertController,
    private syncContacts: syncContacts
    //private androidPermissions: AndroidPermissions
    ) { }

  ngOnInit() {
    this.contactItems$ = this.contactService.getContact();
    this.syncContacts.checkContactsPermission().then(() => {
       this.copyList()
    })
  }

  async copyList() {
    if (this.COPY) return;
    console.log("in copy list")
    const myObserver = {
      //Grabs contact list from phone
      next: (myContactList: Contact[]) => {
        for (var myContact of myContactList) {
          //Name of contacts
        // console.log("Obrsever Subscribe: " + myContact.displayName)
          for (var myNumber of myContact.phoneNumbers){
            //Mobile phone numbers
            if (myNumber.label == "mobile"){
              //console.log("Observer Subscribe: ", myNumber.number);
              this.addTrustList(myContact.displayName,myNumber.number)
            }
          }
        }
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.syncContacts.contacts.subscribe(myObserver)
    this.COPY = true
  }
  async addTrustList(name?:string,number?:string) {
    var splitted = name.split(" ", 2)
    var first = splitted[0]
    var last = splitted[1]
    var newContact: myContact = {
      id: this.idValue,
      firstName: first,
      lastName: last,
      phone: number,
      image: 'assets/images/person.png'
    }
    this.idValue++
    const insert = {
      //Grabs trusted list
      next: (myContactList: myContact[]) => {
        //Inserts new contact into trusted list
        myContactList.push(newContact)
        //Sort Contact list by display name
        myContactList.sort((a, b) => a.firstName.localeCompare(b.firstName))
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.contactItems$.subscribe(insert);

  }
 async getTrustList() {
  this.syncContacts.logTrustList()
}

  async removeFromList(item: myContact) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.contactService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }
  async hi() {
    alert("hi")
  }

}
