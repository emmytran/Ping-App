import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trusted-lists',
  templateUrl: './trusted-lists.page.html',
  styleUrls: ['./trusted-lists.page.scss'],
})
export class TrustedListsPage implements OnInit {
  contactItems$: Observable<Contact[]>;

  constructor(
    private contactService: ContactService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.contactItems$ = this.contactService.getContact();
  }

  async removeFromList(item: Contact) {
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

}
