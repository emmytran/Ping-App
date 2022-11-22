import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  progress = 0;
  constructor(private alertCtrl: AlertController) {}

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
  }

}
