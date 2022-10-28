import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactCardComponent } from './contact-card.component';

@NgModule
({
  declarations: [ContactCardComponent],
  imports:[ CommonModule, IonicModule ],
  exports: [ContactCardComponent],
})
export class ContactCardModule {}