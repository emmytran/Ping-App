import { Component } from '@angular/core';
import { LoadingController, Platform }  from  '@ionic/angular';
import { DatabaseService } from './services/database.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { FcmService } from './services/fcm.service';
import { registerWebPlugin } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Auth } from '@angular/fire/auth';


const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private databaseService: DatabaseService,
    private loadingCtrl: LoadingController,
    private fcmService: FcmService,
    private authenticationservice: AuthService,
    private router: Router
  ) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.fcmService.initPush();

      this.authenticationservice.authenticationstate.subscribe(state => {
        if(state)
        {
          this.router.navigate(['profile', 'home']);
        }else{
          this.router.navigate(['login']);
        }
      })
    });
  }
}
