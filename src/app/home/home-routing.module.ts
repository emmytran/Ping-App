import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'history',
        loadChildren: () =>
          import('../tabs/history/history.module').then(
            m => m.HistoryPageModule)
      },
      {
        path: 'main',
        loadChildren: () =>
          import('../tabs/main/main.module').then(
            m => m.MainPageModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../tabs/settings/settings.module').then(
            m => m.SettingsPageModule)
      },
      {
        path: 'trusted-lists',
        loadChildren: () =>
          import('../tabs/trusted-lists/trusted-lists.module').then(
            m => m.TrustedListsPageModule)
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}