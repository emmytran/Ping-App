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
import { Database } from './services/db.service';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent, HomePage],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    SQLite,
    SQLitePorter,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    Database
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
