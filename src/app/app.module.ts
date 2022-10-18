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
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';

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
    AngularFireAuthModule
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
