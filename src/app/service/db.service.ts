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
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  contactsList: any;
  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) { 
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.storage = db;
        this.getFakeData();
      });
    });
  }
  dbState() {
    return this.isDbReady.asObservable();
  }
  fetchContacts(): Observable<Contacts[]> {
    return this.contactsList.asObservable();
  }
  //This is to render Fake data
  getFakeData() {
    this.httpClient.get (
      'assests/dump.sql',
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
      .then(_ => {
        this.getContacts();
        this.isDbReady.next(true);
      })
      .catch(error => console.error(error));
    });
  }
  //Get list
  getContacts(){
    return this.storage.executeSql('SELECT * FROM contactsTable', []).then(res => {
      let items: Contacts[] = [];
      if (res.rows.length > 0) {
        for(var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            person_name: res.rows.item(i).person_name,
            phone_num: res.rows.item(i).phone_num
          });
        }
      }
      this.contactsList.next(items);
    });
  }
  //Add Information
  addContacts(person_name, phone_num){
    let data = [person_name, phone_num];
    return this.storage.executeSql('INSERT INTO contactTable (person_name, phone_num) VALUES (?, ?)', data)
    .then(res => {
      this.getContacts();
    });
  }
  //Get single object
  getContact(id): Promise<Contacts> {
    return this.storage.executeSql('SELECT * FROM contactsTable WHERE id = ?', [id]).then (res =>{
      return {
        id: res.rows.item(0).id,
        person_name: res.rows.item(0).person_name,
        phone_num: res.rows.item(0).phone_num
      }
    });
  }
  //Update the previous information
  updateContacts(id, person_name: Contacts) {
    let data = [Contacts.person_name, Contacts.phone_num];
    return this.storage.executeSql('UPDATE contactsTable SET person_name = ?, phone_num = ? WHERE id = ${id}', data)
    .then(data => {
      this.getContacts();
    })
  }
  //To delete any pervious contacts
  deleteContacts(id) {
    return this.storage.executeSql('DELETE FROM contactsTable WHERE id = ?'. [id])
    .then(_ => {
      this.getContacts();
    });
  }
}
