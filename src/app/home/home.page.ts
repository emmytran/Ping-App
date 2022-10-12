import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Database } from './../services/db.service'
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   /**
    * @name hasData
    * @type {Boolean}
    * @public
    * @description     Flag used in the template to control display of database records
    */
   public hasData : boolean 		= false;
   /**
    * @name technologies
    * @type {object}
    * @public
    * @description     Stores all of the retrieved database table records
    */
   public technologies : any;
   /**
    * @name dataImported
    * @type {Boolean}
    * @public
    * @description     Flag used to determine whether data has been imported into the SQLite database
    */
   public dataImported : boolean 	= false;
   /**
    * @name _SQL_NAME
    * @type {String}
    * @private
    * @description     Name of the SQL file
    */
   private _SQL_NAME : string 		= 'technologies.sql';
   /**
    * @name _SQL_URI
    * @type {String}
    * @private
    * @description     Location of the SQL file
    */
    private _SQL_URI : string 		= encodeURI("http://REMOTE-URI-HERE/technologies.sql");
  /**
    * @name _JSON_NAME
    * @type {String}
    * @private
    * @description     Name of the JSON file
    */
   private _JSON_NAME : string 		= 'technologies.json';
/**
    * @name _JSON_URI
    * @type {String}
    * @private
    * @description     Location of the JSON file
    */
 private _JSON_URI : string 		= encodeURI("http://REMOTE-URI-HERE/technologies.json");
 /**
  * @name _REMOTE_URI
  * @type {String}
  * @private
  * @description     The address of the remote PHP script
  */
 private _REMOTE_URI : string		= "http://REMOTE-URI-HERE/parse-data.php";
 constructor(
private _DB    	: Database,
private _PLAT    : Platform) 
{ }

/**
* @public
* @method ionViewDidLoad
* @description         Check whether data exists on template view load
* @return {none}
*/
ionViewDidLoad() : void
{
  this._PLAT
  .ready()
  .then(() =>
  {
    setTimeout(() =>
  {
  this._DB
    .dataExistsCheck('technologies')
    .then((data) =>
    {
      this.loadRecords();      
    })
    .catch((error) =>
    {
      console.dir(error);
    });
    }, 1500);
  });
}

/**
* @public
* @method loadRecords
* @description         Retrieve records from database and, on success, set hasData flag to true
* @return {none}
*/
loadRecords() : void
{
this._DB
.retrieveAllRecords()
.then((data : any) =>
{
this.hasData 		= true;
this.technologies 	= data;
})
.catch((error : any) =>
{
console.dir(error);
});
}










}