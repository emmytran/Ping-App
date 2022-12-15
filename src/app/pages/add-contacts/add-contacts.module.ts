import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactsPageRoutingModule } from './add-contacts-routing.module';

import { AddContactsPage } from './add-contacts.page';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end
import { syncContacts } from 'src/app/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactsPageRoutingModule
  ],
  declarations: [AddContactsPage],
  providers: [AndroidPermissions, syncContacts  ]
})
export class AddContactsPageModule {}
