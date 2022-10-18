import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

//Plugin
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx'
import { SQLite } from '@ionic-native/sqlite/ngx'
import { HttpClientModule } from '@angular/common/http'
import { DatabaseService } from './services/database.service';
import { HomePageModule } from './home/home.module';

//Firbase Plugin
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule, provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    HomePageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging())
  ],
  providers: [
    SQLite,
    SQLitePorter,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    DatabaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
