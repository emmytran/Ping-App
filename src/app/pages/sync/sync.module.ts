import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyncPageRoutingModule } from './sync-routing.module';

import { SyncPage } from './sync.page';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end
import { syncContacts } from 'src/app/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyncPageRoutingModule
  ],
  declarations: [SyncPage],
  providers: [AndroidPermissions,syncContacts]
})
export class SyncPageModule {}
