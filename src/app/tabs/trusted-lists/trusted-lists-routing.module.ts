import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrustedListsPage } from './trusted-lists.page';

const routes: Routes = [
  {
    path: '',
    component: TrustedListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrustedListsPageRoutingModule {}
