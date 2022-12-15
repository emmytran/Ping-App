import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrustedListsPageRoutingModule } from './trusted-lists-routing.module';

import { TrustedListsPage } from './trusted-lists.page';
import { ContactCardModule } from 'src/app/components/contact-card/contact-card.module';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'; // Notice the '/' at the end
import { syncContacts } from 'src/app/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrustedListsPageRoutingModule,
    ContactCardModule,
  ],
  declarations: [TrustedListsPage],
  providers: [AndroidPermissions,syncContacts]
})
export class TrustedListsPageModule {}
