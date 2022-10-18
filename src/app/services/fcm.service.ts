import { Injectable } from '@angular/core';
import {Plugins, Capacitor } from '@capacitor/core';
import { Router } from '@angular/router';
import { PushNotification, 
  PushNotificationToken, 
  PushNotificationActionPerformed} from '@capacitor/core';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private router: Router) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  private registerPush()
  {
    PushNotifications.requestPermission().then((permission) => {
      if(permission.grantes) {
        //Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      }else {
        //No permission for push granted
      }
    });
    PushNotifications.addContacts(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token));
      }
    );

    PushNotifications.addContacts('registrationError', (error: any) => {
      console.log('Error: '+ JSON.stringify(error));
    });

    PushNotifications.addContacts(
      'pushNotificationReveived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addContacts(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
          this.router.navigateByUrl('home/${data.detailsId');
        }
      }
    );
  }
}
