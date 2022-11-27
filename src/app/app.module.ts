import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Plugin
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx'
import { SQLite } from '@ionic-native/sqlite/ngx'
import { HttpClientModule } from '@angular/common/http'
import { DatabaseService } from './services/database.service';
import { HomePageModule } from './home/home.module';

//Firbase Plugin
/*import { AngularFireModule} from '@angular/fire/compat';*/
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { getApp } from 'firebase/app';
//Updated Database Plugin
import { FCM } from '@ionic-native/fcm/ngx';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    HomePageModule,
    /*AngularFireModule.initializeApp(environment.firebase),*/
    AngularFirestoreModule, //Only require for database features
    AngularFireStorageModule, //Require for storage features
    AngularFireAuthModule, //Require for auth features
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
				return initializeAuth(getApp(), {
					persistence: indexedDBLocalPersistence
				});
			} else {
				return getAuth();
			}
    }),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage()),
  ],
  providers: [
    FCM,
    SQLite,
    SQLitePorter,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    },
    {
      provide: FIREBASE_OPTIONS, 
      useValue: environment.firebase 
    },
    DatabaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
