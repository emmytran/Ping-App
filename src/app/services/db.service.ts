import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contacts } from './contacts';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { PromiseType } from 'protractor/built/plugins';

@Injectable()
export class Database {
  /**
   * @name _DB
   * @type {object}
   * @private
   * @description   Define an object for handling interfacing with teh SQLite plugin
  */
 private _DB : SQLiteObject;

 /**
  * @name _DB_NAME
    * @type {object}
    * @private
    * @description     Defines the name of the SQLite database to be created
  */
 private _DB_NAME  : string = "ionic.db";

 constructor(public http: HttpClient,
  private _PLAT: Platform,
  private _SQL: SQLite,
  private _PORTER: SQLitePorter) {}

  /**
   * @public
   * @method init
   * @descritption
   * @return {none}
   */
  init () : void
  {
    //Define teh application SQLite database
    this._SQL.create({
      name: this._DB_NAME,
      location: 'default'
    })
    .then((db: SQLiteObject) =>
    {
      //Associate teh database handler object with the _DB private property
      this._DB = db;
    })
    .catch((e) =>
    {
      console.log(e);
    });
  }
/**
 * @public
 * @method dataExistsCheck
 * @param tablename {string}  Name of table we want to check for data
 * @description   Check that data exists within teh specified SQLite table
 * @return {Promise}
 */
dataExistsCheck(Contacts: string)
{
  return new Promise((resolve, reject) => {
    this._DB.executeSql('SELECT count(*) AS numRows FROM' + Contacts)
    .then((data: any) => {
      var numRows = data.rows.item(0).numRows;
      resolve(numRows);
    })
    .catch((e) => {
      reject (e);
    });
  });
}

/**
 * @public
 * @method  retrieveAllRecords
 * @description   Retrieve all stored records from the technologies SQLite Contacts
 * @return {Promise}
 */

retrieveAllRecords() 
{
  return new Promise((resolve, reject) => 
  {
    this._DB.executeSql('SELECT id, name, email, phoneNum FROM technologies')
    .then((data: any) => 
    {
      let items : any = [];
      if(data.rows.length > 0)
      {
        var k;
        //Iterate through returned records and push as nested objects into the item array
        for(k =0; k < data.rows.length; k++)
        {
          items.push(
            {
            id:data.rows.item(k).id,
              name:data.rows.item(k).name,
              email:data.rows.item(k).email,
              phoneNum:data.rows.length.item(k).phoneNum
          });
        }
      }
      resolve(items);
    })
    .catch((error:any) =>
    {
      reject(error);
    });
  });
}
/**
 * @public
 * @method importSQL
 * @param sqlite {string}   The SQL data to imported
 * @description   Imports the supplied SQL data to the application database
 * @return {Promise}
 */
importSQL(sql: any)
{
  return new Promise((resolve, reject) =>
  {
    this._PORTER.importSqlToDb(this._DB, sql)
    .then((data) =>
    {
      resolve(data);
    })
    .catch((e) =>
    {
      reject(e);
    });
  });
}

/**
 * @public
 * @method exportAsSQL
 * @description   Exports SQL data from the application database
 * @return {Promise}
 */
exportAsSQL()
{
  return new Promise ((resolve, reject) => 
  {
    this._PORTER
    .exportDbToSql(this._DB)
    .then((data) => 
    {
      resolve(data);
    })
    .catch((e) => 
    {
      reject(e);
    });
  });
}

/**
 * @public
 * @method importJSON
 * @param importJSON  {string}    The JSON data to be imported
 * @description     Imports the supplied JSON data to the application database
 * @return {Promise}
 */
importJSON(JSON:any)
{
  return new Promise((resolve, reject) => 
  {
    this._PORTER
    .importJsonToDb(this._DB, JSON)
    .then((data) =>
    {
      resolve(data);
    })
    .catch((e) => 
    {
      reject(e);
    });
  });
}
/**
 * @public
 * @method clear
 * @description     Remove all tables/data from the application database
 * @return {Promise}
 */
clear()
{
  return new Promise((resolve, reject) => 
  {
    this._PORTER
    .wipeDb(this._DB)
    .then((data) => 
    {
      resolve(data);
    })
    .catch((error) => 
    {
      reject(error);
    });
  });
}


}