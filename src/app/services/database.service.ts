import { IonRadio, Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';  
import { Contacts } from './contacts';

export interface Dev {
  id: number,
  name: string,
  skills: any[],
  phone: any[],
  img: string,
  email: any[]
}
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
private storage: SQLiteObject;
private database: SQLiteObject;
public dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


contacts = new BehaviorSubject([]);
names = new BehaviorSubject([]);
phones = new BehaviorSubject([]);
emails = new BehaviorSubject([]);
init: any;
developers = new BehaviorSubject([]);

constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
  this.plt.ready().then(() => {
    this.sqlite.create({
      name: 'Contacts.db',
      location: 'default'
    })
    /*.then((db: SQLiteObject) => {
      this.database = db;
      this.seedDatabase();
    });*/
  });
}
dbState() {
  return this.dbReady.asObservable();
}
seedDatabase() {
  this.http.get('assets/seed.sql', {responseType: 'text'})
  .subscribe(sql => {
    this.sqlitePorter.importSqlToDb(this.database, sql)
    .then(_ => {
      this.loadName();
      this.loadEmail();
      this.loadPhoneNum();
      this.dbReady.next(true);
    })
    .catch(e => console.error(e));
  });
}

getDatabaseState()
{
  return this.dbReady.asObservable();
}
getContacts(): Observable<Dev[]> 
{
  return this.names.asObservable();
}
getPhoneNum(): Observable<any[]> 
{
  return this.phones.asObservable();
}
getEmail(): Observable<any[]>
{
  return this.emails.asObservable();
}
getDevs(): Observable<Dev[]> {
  return this.developers.asObservable();
}
loadName() 
{
  return this.database.executeSql('SELECT * FROM contacts', []).then(data => {
    let contacts: Contacts[] = [];

    if(data.rows.length > 0)
    {
      for (var i=0; i< data.rows.length; i++)
      {
        let email = [];
        if(data.rows.item(i).email != '')
        {
          email = JSON.parse(data.rows.item(i).email);
        }
        contacts.push({
          id: data.rows.item(i).id,
          person_name: data.rows.item(i).name,
          email: email,
          phone_num: data.rows.item(i).phone
        });
      }
    }
    this.contacts.next(contacts);
  });
}

addContacts(person_name, email, phone_num) 
{
  let data = [person_name, JSON.stringify(email), phone_num];
  return this.database.executeSql('INSERT INTO contacts (name, email, phoneNum) VALUES (?,?,?)', data).then(data => {
    this.loadName();
  })
}

/*getDeveloper(id): Promise<Dev>
{
  return this.database.executeSql('SELECT * FROM contacts WHERE id = ?', [id]).then(data => {
    let emails = [];

    if (data.rows.item(0).emails != ' ') {
      emails = JSON.parse(data.rows.item(0).emails);
    }
  return
  {
    id: data.rows.item(0).id,
    person_name: data.rows.item(0).name,
    email: email,
    phone_num: data.rows.item(0).phone
  }
  });
  
}*/

deleteContacts(id) 
{
  return this.database.executeSql('DELETE FROM contacts WHERE id = ?', [id]).then(_ => {
    this.loadName();
    this.loadEmail();
    this.loadPhoneNum();
  })
}

updateContacts(dev: Dev)
{
  let data = [dev.name, JSON.stringify(dev.email), dev.phone];
  return this.database.executeSql('UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id =${dev.id}',data).then(data => {
    this.loadName();
  })
}

loadEmail()
{
  let query = 'SELECT Email.name, Email.id, Name.name AS creator FROM email JOIN name ON name.id = email.creatorId';
  return this.database.executeSql(query, []).then(data => {
    let email = [];
    if(data.rows.length > 0) 
    {
      for(var i =0; i < data.rows.length; i++)
      {
        email.push({
          person_name: data.rows.item(i).person_name,
          id: data.rows.item(i).id,
          creator: data.rows.item(i).creator,
        });
      }
    }
    this.emails.next(email);
  })
}

loadPhoneNum()
{
  let query = 'SELECT PhoneNum.name, PhoneNum.id, Name.name AS creator FROM phone JOIN name ON name.id = phoneNum.creatorId';
  return this.database.executeSql(query, []).then(data => {
    let phoneNum = [];
    if(data.rows.length > 0) 
    {
      for(var i =0; i < data.rows.length; i++)
      {
        phoneNum.push({
          person_name: data.rows.item(i).person_name,
          id: data.rows.item(i).id,
          creator: data.rows.item(i).creator,
        });
      }
    }
    this.phones.next(phoneNum);
  })
}

addEmail(name, creator)
{
  let data = [name, creator];
  return this.database.executeSql('INSERT INTO product (name,creatorId) VALUES (?,?)', data).then(data => {
    this.loadEmail();
  })
}

addPhone(name, creator)
{
  let data = [name, creator];
  return this.database.executeSql('INSERT INTO product (name,creatorId) VALUES (?,?)', data).then(data => {
    this.loadPhoneNum();
  })
}

getDeveloper(id): Promise<Dev> 
{
  return this.database.executeSql('SELECT * FROM developer WHERE id = ?', [id]).then(data => {
    let skills = [];
    if (data.rows.item(0).skills != '') {
      skills = JSON.parse(data.rows.item(0).skills);
    }

    return {
      id: data.rows.item(0).id,
      name: data.rows.item(0).name,
      skills: skills,
      phone: data.rows.item(0).phone,
      img: data.rows.item(0).img,
      email: data.rows.item(0).emails
    }
  });
}

}