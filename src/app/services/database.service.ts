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
export class DatabaseService {
  private storage: SQLiteObject;
  contactsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'ping_db.db',
        location: 'default'
      })
    });
  }
  dbState() {
    return this.isDbReady.asObservable();
  }
  fetchData(): Observable<Contacts[]> {
    return this.contactsList.asObservable();
  }
    //Render Dummy data
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
    getContacts(){
      return this.storage.executeSql('SELECT * FROM contactData', []).then(res => {
        let items: Contacts[] =[];
        if(res.rows.length > 0) {
          for(var i =0; i < res.rows.length; i++){
            items.push({
              id: res.rows.item(i).id,
              person_name: res.ros.item(i).person_name,
              phone_num: res.row.item(i).phone_num,
              email: res.row.item(i).email
            });
          }
        }
        this.contactsList.next(items);
      });
    }
    //Add
    addContact(person_name, phone_num, email){
      let data = [person_name, phone_num, email];
      return this.storage.executeSql('INSERT INTO contactData (person_name, phone_num, email) VALUES (?,?)', data)
      .then(res => {
        this.getContacts
      })
    }
    //Grabing on contact 
    getContact(id): Promise<Contacts> {
      return this.storage.executeSql('SELECT * FROM contactData WHERE id = ?', [id]).then(res => { 
        return {
          id: res.rows.item(0).id,
          person_name: res.rows.item(0).person_name,  
          phone_num: res.rows.item(0).phone_num,
          email: res.rows.item(0).email
        }
      });
    }
    //Update
    updateContacts(id,contact: Contacts){
      let data = [contact.person_name,contact.phone_num, contact.email];
      return this.storage.executeSql('UPDATE contactData SET person_name = ?, phone_num = ?, email = ? WHERE id = ${id}', data)
      .then(data =>{
        this.getContacts();
      })
    }
    //Delete 
    deleteContacts(id){
      return this.storage.executeSql('DELETE FORM contactData WHERE id = ?',[id])
      .then(_=>{
        this.getContacts();
      })
    }

}