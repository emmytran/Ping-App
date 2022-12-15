import { Component, OnInit } from '@angular/core';
import { ImageCropperComponent } from 'src/app/components/image-cropper/image-cropper.component';
import { PopoverController } from '@ionic/angular';
import { syncContacts } from 'src/app/contacts.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.page.html',
  styleUrls: ['./add-contacts.page.scss'],
})
export class AddContactsPage implements OnInit {

  currentPopover: any;

  constructor(private popoverController: PopoverController, private syncContacts: syncContacts) { }

  ngOnInit() {

  }

  async setPicture(ev) {
    if(ev.target.files[0]) {
      const popover = await this.popoverController.create({
        component: ImageCropperComponent,
        animated: false,
        componentProps: { 'imgFile': ev.target.files[0], 'ratio': (1/1) },
        cssClass: 'image-popover',
        event: ev,
        translucent: true,
        backdropDismiss: false
      });

      await popover.present();
      this.currentPopover = popover;

      return popover.onDidDismiss().then(({data}) => {
        if(!data) return
        let elem = <HTMLElement>document.getElementById('profilePic');
        elem.setAttribute('src', data.previewImage.toDataURL());
      })
    }
  }

  async getSyncContacts() {
    this.syncContacts.checkContactsPermission();
  }
}
