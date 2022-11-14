import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { LoginPage } from './pages/login/login.page';
import { LoginPageModule } from './pages/login/login.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = ()  => redirectLoggedInTo(['home']);

const routes: Routes = [
 /* {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then((m) => LoginPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },*/
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./tabs/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tabs/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./tabs/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'trusted-lists',
    loadChildren: () => import('./tabs/trusted-lists/trusted-lists.module').then( m => m.TrustedListsPageModule)
  },
  {
    path: 'add-contacts',
    loadChildren: () => import('./pages/add-contacts/add-contacts.module').then( m => m.AddContactsPageModule)
  },
  {
    path: 'add-now',
    loadChildren: () => import('./pages/add-now/add-now.module').then( m => m.AddNowPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'sync',
    loadChildren: () => import('./pages/sync/sync.module').then( m => m.SyncPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'developers/:id',
    loadChildren: () => import('./pages/developers/developers.module').then( m => m.DevelopersPageModule)
  },
    
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
