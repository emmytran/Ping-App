import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNowPage } from './add-now.page';

const routes: Routes = [
  {
    path: '',
    component: AddNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNowPageRoutingModule {}
