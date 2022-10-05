import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNowPageRoutingModule } from './add-now-routing.module';

import { AddNowPage } from './add-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNowPageRoutingModule
  ],
  declarations: [AddNowPage]
})
export class AddNowPageModule {}
