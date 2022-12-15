import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HoldableDirective } from './holdable.directive';

import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end
import { mySMS } from '../../sms.service';
import { syncContacts } from 'src/app/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, HoldableDirective],
  providers: [SMS , AndroidPermissions, mySMS, syncContacts  ]
})
export class MainPageModule {}
