(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/history/history.module */ 2768)).then(m => m.HistoryPageModule)
    },
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/main/main.module */ 2698)).then(m => m.MainPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/settings/settings.module */ 4535)).then(m => m.SettingsPageModule)
    },
    {
        path: 'trusted-lists',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_trusted-lists_trusted-lists_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/trusted-lists/trusted-lists.module */ 2867)).then(m => m.TrustedListsPageModule)
    },
    {
        path: 'add-contacts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-contacts_add-contacts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-contacts/add-contacts.module */ 593)).then(m => m.AddContactsPageModule)
    },
    {
        path: 'add-now',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-now_add-now_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-now/add-now.module */ 3563)).then(m => m.AddNowPageModule)
    },
    {
        path: 'location',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_location_location_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/location/location.module */ 3213)).then(m => m.LocationPageModule)
    },
    {
        path: 'sync',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sync_sync_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sync/sync.module */ 2907)).then(m => m.SyncPageModule)
    },
    {
        path: 'alert',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_alert_alert_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/alert/alert.module */ 1182)).then(m => m.AlertPageModule)
    },
    {
        path: 'map',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_map_map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/map/map.module */ 6016)).then(m => m.MapPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 2820);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 6646);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/db.service */ 3773);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ 3467);







//Plugin





let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_5__.HomePageModule
        ],
        providers: [
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__.SQLite,
            _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_2__.SQLitePorter,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
            },
            _services_db_service__WEBPACK_IMPORTED_MODULE_4__.Database
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'history',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/history/history.module */ 2768)).then(m => m.HistoryPageModule)
            },
            {
                path: 'main',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/main/main.module */ 2698)).then(m => m.MainPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/settings/settings.module */ 4535)).then(m => m.SettingsPageModule)
            },
            {
                path: 'trusted-lists',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_trusted-lists_trusted-lists_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/trusted-lists/trusted-lists.module */ 2867)).then(m => m.TrustedListsPageModule)
            },
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/db.service */ 3773);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);






let HomePage = class HomePage {
    constructor(navCtl, _ALERT, _HTTP, _DB, _PLAT) {
        this.navCtl = navCtl;
        this._ALERT = _ALERT;
        this._HTTP = _HTTP;
        this._DB = _DB;
        this._PLAT = _PLAT;
        /**
         * @name hasData
         * @type {Boolean}
         * @public
         * @description     Flag used in the template to control display of database records
         */
        this.hasData = false;
        /**
         * @name dataImported
         * @type {Boolean}
         * @public
         * @description     Flag used to determine whether data has been imported into the SQLite database
         */
        this.dataImported = false;
        /**
         * @name _SQL_NAME
         * @type {String}
         * @private
         * @description     Name of the SQL file
         */
        this._SQL_NAME = 'technologies.sql';
        /**
         * @name _SQL_URI
         * @type {String}
         * @private
         * @description     Location of the SQL file
         */
        this._SQL_URI = encodeURI("http://REMOTE-URI-HERE/technologies.sql");
        /**
          * @name _JSON_NAME
          * @type {String}
          * @private
          * @description     Name of the JSON file
          */
        this._JSON_NAME = 'technologies.json';
        /**
            * @name _JSON_URI
            * @type {String}
            * @private
            * @description     Location of the JSON file
            */
        this._JSON_URI = encodeURI("http://REMOTE-URI-HERE/technologies.json");
        /**
         * @name _REMOTE_URI
         * @type {String}
         * @private
         * @description     The address of the remote PHP script
         */
        this._REMOTE_URI = "http://REMOTE-URI-HERE/parse-data.php";
    }
    /**
    * @public
    * @method ionViewDidLoad
    * @description         Check whether data exists on template view load
    * @return {none}
    */
    ionViewDidLoad() {
        this._PLAT
            .ready()
            .then(() => {
            setTimeout(() => {
                this._DB
                    .dataExistsCheck('technologies')
                    .then((data) => {
                    this.loadRecords();
                })
                    .catch((error) => {
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
    loadRecords() {
        this._DB
            .retrieveAllRecords()
            .then((data) => {
            this.hasData = true;
            this.technologies = data;
        })
            .catch((error) => {
            console.dir(error);
        });
    }
    /**
     * @public
     * @method import
     * @description   //Retrive records from database and, on success, set hadData flag to true
     * @return {none}
     */
    import() {
        this._DB
            .dataExistsCheck('technologies')
            .then((data) => {
            //if we have existing data then wipe teh database
            if (data > 0) {
                this._DB
                    .clear()
                    .then((data) => {
                    //If data successfully wiped off tables/data call eth importAlert method
                    this.hasData = false;
                    this.importAlert();
                })
                    .catch((error) => {
                    console.dir(error);
                });
            }
            //If we don't have existing data just call teh importAlert method
            else {
                this.importAlert();
            }
        })
            .catch((error) => {
            this.importAlert();
        });
    }
    /**
     * @public
     * @method retrieveSQLfile
     * @description   Retrieve remote SQL file using Angular HTTPClient get method
     * @return {none}
     */
    retrieveSQLFile() {
        this._HTTP
            .get(this._SQL_URI, { responseType: 'text' })
            .subscribe((data) => {
            this.importSQL(data);
        }, (error) => {
            console.dir(error);
        });
    }
    /**
     * @public
     * @method retrieveJSONFile
     * @descriotion   Retrieve remote JSON file using Angular HttpClient get method
     * @return {none}
     */
    retrieveJSONFile() {
        this._HTTP
            .get(this._JSON_URI)
            .subscribe((data) => {
            this.importJSON(data);
        }, (error) => {
            console.dir(error);
        });
    }
    /**
     * @public
     * @method importSQL
     * @param sqlFile   {any} The SQL file data to be imported
     * @description   Import SQL File
     * @return {none}
     */
    importSQL(sqlFile) {
        this._DB
            .importSQL(sqlFile)
            .then((res) => {
            this.dataImported = true;
            this.loadRecords();
        })
            .catch((error) => {
            console.dir(error);
        });
    }
    /**
     * @public
     * @method importJSON
     * @param jsonFile {any}  The JSON file data to be imported
     * @return {none}
     */
    importJSON(jsonFile) {
        this._DB
            .importJSON(jsonFile)
            .then((res) => {
            this.dataImported = true;
            this.loadRecords();
        })
            .catch((error) => {
            console.dir(error);
        });
    }
    /**
     * @public
     * @method importAlert
     * @description       Display an Alert Window allowing the user to select their data import type: SQL or JSON
     * @return {none}
     */
    importAlert() {
        let alert = this._ALERT.create({
            header: 'Import data',
            subHeader: 'Please select which import option you prefer',
            message: "This is an alert!",
            buttons: [
                {
                    text: 'JSON',
                    handler: () => {
                        this.retrieveJSONFile();
                    }
                },
                {
                    text: 'SQL',
                    handler: () => {
                        this.retrieveSQLFile();
                    }
                }
            ]
        });
        alert.present();
    }
    /**
     * @public
     * @method exportAlert
     * @description     Display an Alert Window allowing the user to select their data export type: currently only SQL
     * @return {none}
     */
    exportAlert() {
        let alert = this._ALERT.create({
            header: 'Export data',
            subHeader: 'Please select which export option you prefer',
            message: "This is an alert!",
            buttons: [
                {
                    text: 'SQL',
                    handler: () => {
                        this.exportToSQL();
                    }
                }
            ]
        });
        alert.present();
    }
    /**
     * @pulic
     * @method exportToSQL
     * @description     Handles the export of SQL data using the DatabaseProvider service
     * @return {none}
     */
    exportToSQL() {
        this._DB
            .exportAsSQL()
            .then((res) => {
            let filename = Date.now() + '.sql';
            this.parseAndUploadSQL(filename, res);
        })
            .catch((error) => {
            console.dir(error);
        });
    }
    /**
     * @public
     * @method parseAndUploadSQL
     * @param filename {String}   The file name for the exported SQL data
     * @param filename {string}   The exported SQL data
     * @description   Post the exported SQL data to the remote PHP script using Angular's HTTPClient module
     * @return {none}
     */
    parseAndUploadSQL(fileName, sqlData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/octet-stream' }), options = { "name": fileName, "data": sqlData };
        this._HTTP
            .post(this._REMOTE_URI, JSON.stringify(options), headers)
            .subscribe((res) => {
            console.dir(res);
        }, (error) => {
            console.dir(error);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_1__.Database },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'page-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], HomePage);



/***/ }),

/***/ 3773:
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Database": () => (/* binding */ Database)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 2820);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 6646);






let Database = class Database {
    constructor(http, _PLAT, _SQL, _PORTER) {
        this.http = http;
        this._PLAT = _PLAT;
        this._SQL = _SQL;
        this._PORTER = _PORTER;
        /**
         * @name _DB_NAME
           * @type {object}
           * @private
           * @description     Defines the name of the SQLite database to be created
         */
        this._DB_NAME = "ionic.db";
    }
    /**
     * @public
     * @method init
     * @descritption
     * @return {none}
     */
    init() {
        //Define teh application SQLite database
        this._SQL.create({
            name: this._DB_NAME,
            location: 'default'
        })
            .then((db) => {
            //Associate teh database handler object with the _DB private property
            this._DB = db;
        })
            .catch((e) => {
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
    dataExistsCheck(Contacts) {
        return new Promise((resolve, reject) => {
            this._DB.executeSql('SELECT count(*) AS numRows FROM' + Contacts)
                .then((data) => {
                var numRows = data.rows.item(0).numRows;
                resolve(numRows);
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    /**
     * @public
     * @method  retrieveAllRecords
     * @description   Retrieve all stored records from the technologies SQLite Contacts
     * @return {Promise}
     */
    retrieveAllRecords() {
        return new Promise((resolve, reject) => {
            this._DB.executeSql('SELECT id, name, email, phoneNum FROM technologies')
                .then((data) => {
                let items = [];
                if (data.rows.length > 0) {
                    var k;
                    //Iterate through returned records and push as nested objects into the item array
                    for (k = 0; k < data.rows.length; k++) {
                        items.push({
                            id: data.rows.item(k).id,
                            name: data.rows.item(k).name,
                            email: data.rows.item(k).email,
                            phoneNum: data.rows.length.item(k).phoneNum
                        });
                    }
                }
                resolve(items);
            })
                .catch((error) => {
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
    importSQL(sql) {
        return new Promise((resolve, reject) => {
            this._PORTER.importSqlToDb(this._DB, sql)
                .then((data) => {
                resolve(data);
            })
                .catch((e) => {
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
    exportAsSQL() {
        return new Promise((resolve, reject) => {
            this._PORTER
                .exportDbToSql(this._DB)
                .then((data) => {
                resolve(data);
            })
                .catch((e) => {
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
    importJSON(JSON) {
        return new Promise((resolve, reject) => {
            this._PORTER
                .importJsonToDb(this._DB, JSON)
                .then((data) => {
                resolve(data);
            })
                .catch((e) => {
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
    clear() {
        return new Promise((resolve, reject) => {
            this._PORTER
                .wipeDb(this._DB)
                .then((data) => {
                resolve(data);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
};
Database.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLitePorter }
];
Database = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], Database);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button tab=\"trusted-lists\">\r\n        <ion-icon name=\"people-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"history\">\r\n        <ion-icon name=\"list-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"main\">\r\n        <ion-icon name=\"radio-button-off-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"settings\">\r\n        <ion-icon name=\"settings-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map