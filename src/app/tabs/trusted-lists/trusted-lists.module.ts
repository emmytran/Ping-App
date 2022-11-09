import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrustedListsPageRoutingModule } from './trusted-lists-routing.module';

import { TrustedListsPage } from './trusted-lists.page';

import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrustedListsPageRoutingModule
  ],
  declarations: [TrustedListsPage],
providers: [SMS , AndroidPermissions ]
})
export class TrustedListsPageModule {}
