import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { mySMS } from '../../sms.service';
import { syncContacts } from '../../contacts.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  progress = 0;
  constructor(private alertCtrl: AlertController, private mySMS: mySMS, private syncContacts: syncContacts) {}

  async holdButton(e) { //hold button progress bar
    this.progress = e / 10;

    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Location sent to trusted list',
    });

    if (this.progress > 100) { //after the bar is reached-> alert message and send location
      alert.present();
    }
  }

  ngOnInit() {
    this.syncContacts.checkContactsPermission();
  }
  sendSMS() {
    console.log("Prepareing PING")
    this.syncContacts.logTrustList();
    this.mySMS.checkSMSPermission(this.syncContacts.contacts).then(() => {
        this.completeAlert();
    })
  }
    //Alert for missing SMS permission
    async completeAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Ping has completed',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
}
