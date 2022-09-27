import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.homePageModule)}
  {
    path: 'Contacts/:id',
    loadChildren: () => import('./Contacts/Contacts.module').then(m => ContactPageModule)
  },  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
