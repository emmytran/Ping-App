import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contacts } from './contacts';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import '@capacitor-community/sqlite';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
  contactsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) { 
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'position_db.db',
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
  fetchContacts(): Observable<Contacts[]>{
    return this.contactsList.asObservable();
  }
  //Generate Fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
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
  //Get  a list of the contact
  getContacts(){
    return this.storage.executeSql('SELECT * FROM contactsTable', []).then(res =>{
      let item: Contacts[] = [];
      if(res.rows.length > 0 ){
        for (var i =0; i < res.rows.length; i++){
          item.push({
            id: res.rows.item(i).id,
            person_name: res.rows.item(i).person_name,
            phone_num: res.rows.item(i).phone_num
          });
        }
      }
      this.contactsList.next(item);
    });
  }
  //Add function
  addContacts(person_name, phone_num) {
    let data = [person_name, phone_num];
    return this.storage.executeSql('INSERT INTO contactsTable (person_name, phone_name) VALUES(?,?)', data)
    .then(res =>{
      this.getContacts();
    });
  }
  //Get a single items
  getContact(id):Promise<Contacts>{
    return this.storage.executeSql('SELECT * FROM contactsTable WHERE id = ?', [id]).then (res =>{
      return {
        id: res.rows.item(0).id,
        person_name: res.rows.item(0).person_name,
        phone_num: res.rows.item(0).phone_name
      }
    });
  }
  //To make any Update
  updateContacts(id, contact: Contacts)
  {
    let data = [contact.person_name, contact.phone_num];
    return this.storage.executeSql('UPDATE contactsTable SET person_name = ?, phone_num = ? WHERE id = ${id}', data)
    .then(data => {
      this.getContacts();
    })
  }
  //To Delete any Contacts
  deleteContacts(id){
    return this.storage.executeSql('DELETE FROM contactsTable WHERE id = ?', [id])
    .then(res => {
      this.getContacts
    });
  }
}
