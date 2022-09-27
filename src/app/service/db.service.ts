import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contacts } from './contacts';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
  contacts = new BehaviorSubject([])
  constructor() { }
}
