import { Injectable, INJECTOR } from "@angular/core";
import { Plugins } from '@capacitor/core';
import '@capacitor-community/sqlite';
import { AlertController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { async, BehaviorSubject, from, of } from "rxjs";
import { concatAll, switchMap } from 'rxjs/operators';

import { JsonSQLite } from "@capacitor-community/sqlite";
import { Contacts } from "./contacts";
//import { info } from "console";
const  { CapacitorSQLite, Device, Storage } = Plugins;

const DB_SETUP_KEY = 'first_db_setup';
const DB_NAME_KEY =  'db_name';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  getDatabaseExport: any;
  addNewContacts: any;
  deleteContacts: any;
  getProductList: any;
  dbReady = new BehaviorSubject(false);
  dbName = '';
  getContactsList: any;
  
  constructor(private http: HttpClient, private alertCrtl: AlertController) { }
  
  async  init() : Promise<void> {
   const infor= await Device.info();
   
   if (infor.platform === "android") {
    try {
      const sqlite = CapacitorSQLite as any;
      await sqlite.requestPermissons();
      this.setupDatabase();
    }catch (e) {
      const alert = await this.alertCrtl.create({
        header: 'No DB access',
        subHeader: "This app can't work without Database access.",
        buttons: ['Ok']
      });
      await alert.present();
    }
   }else {
    this.setupDatabase();
   }
  }

  private async setupDatabase() {
    const dbSetupDone = await Storage.get({key: DB_SETUP_KEY});

    if(!dbSetupDone.value) {
      this.downloadDatabase();
    }else{
      this.dbName = (await Storage.get({key: DB_NAME_KEY})).value;
      await CapacitorSQLite.open({database: this.dbName});
      this.dbReady.next(true);
    }
  }
  private downloadDatabase(update = false) {
    this.http.get('').subscribe(async (jsonExport: JsonSQLite) => {
      const jsonstring = JSON.stringify(jsonExport);
      const isvalid = await CapacitorSQLite.isJsonValid({jsonstring});

      if (!update) {
        await CapacitorSQLite.createSyncTable();
      }else {
        await CapacitorSQLite.setSyncDate({syncdate: '' + new Date().getTime ()})
      }
      this.dbReady.next(true);
    });
  }
}
