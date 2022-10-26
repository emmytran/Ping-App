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
        path: 'home/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 557)).then(m => m.DetailsPageModule)
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
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 557)).then(m => m.DetailsPageModule)
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
/* harmony import */ var C_Users_Elvis_ping_app_Ping_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/database.service */ 4382);
/* harmony import */ var _services_fcm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/fcm.service */ 5019);








let AppComponent = class AppComponent {
  constructor(platform, databaseService, loadingCtrl, fcmService) {
    this.platform = platform;
    this.databaseService = databaseService;
    this.loadingCtrl = loadingCtrl;
    this.fcmService = fcmService;
    this.initializeApp();
  }

  initializeApp() {
    var _this = this;

    return (0,C_Users_Elvis_ping_app_Ping_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.platform.ready().then(() => {
        _this.fcmService.initPush();
      });

      _this.platform.ready().then( /*#__PURE__*/(0,C_Users_Elvis_ping_app_Ping_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const loading = yield _this.loadingCtrl.create();
        yield loading.present(); //this.databaseService.init();

        _this.databaseService.dbReady.subscribe(isReady => {
          if (isReady) {
            loading.dismiss();
          }
        });
      }));
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_4__.FcmService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 2820);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 6646);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/database.service */ 4382);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ 9386);








//Plugin





//Firbase Plugin




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomePageModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_13__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestoreModule,
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule
        ],
        providers: [
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__.FCM,
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__.SQLite,
            _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__.SQLitePorter,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
            },
            _services_database_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseService
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/push-notifications */ 1704);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 5099);





//Push Notification

//Geolocation




const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Plugins;
let HomePage = class HomePage {
    constructor(db, afAuth, afs) {
        this.db = db;
        this.afAuth = afAuth;
        this.afs = afs;
        this.contacts = [];
        this.contact = {};
        this.name = {};
        this.selectedView = 'devs';
        this.export = null;
        this.newContacts = 'New Contacts';
        this.Data = [];
        this.marker = [];
        //Misc
        this.isTracking = false;
        this.user = null;
        //Geolocation setup
        this.anonLogin();
    }
    //Geolocation main setup
    ionViewWillEnter() {
        this.loadMap();
    }
    //Makesure an anonymous login and load data
    anonLogin() {
        this.afAuth.signInAnonymously().then(res => {
            this.user = res.user;
            this.locationsCollection = this.afs.collection('locations/${this.user.uid}/track', ref => ref.orderBy('timestamp'));
            //Make sure we also get the Firebase item ID!
            this.locations = this.locationsCollection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            })));
            //Update Map maker on every change
            this.locations.subscribe(locations => {
                this.updateMap(locations);
            });
        });
    }
    //Initialize a blank map
    loadMap() {
        let latlng = new google.maps.LatLng(51.9036442, 7.6683267);
        let mapOptions = {
            center: latlng,
            zoom: 5,
            mapTypdId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    // Use Capacitor to track our geolocation
    startTracking() {
        this.isTracking = true;
        this.watch = Geolocation.watchPosition({}, (position, err) => {
            if (position) {
                this.addNewLocation(position.coords.latitude, position.coords.longitude, position.timestamp);
            }
        });
    }
    // Unsubscribe from the geolocation watch using the initial ID
    stopTracking() {
        Geolocation.clearWatch({ id: this.watch }).then(() => {
            this.isTracking = false;
        });
    }
    // Save a new location to Firebase and center the map
    addNewLocation(lat, lng, timestamp) {
        this.locationsCollection.add({
            lat,
            lng,
            timestamp
        });
        let position = new google.maps.LatLng(lat, lng);
        this.map.setCenter(position);
        this.map.setZoom(5);
    }
    // Delete a location from Firebase
    deleteLocation(pos) {
        this.locationsCollection.doc(pos.id).delete();
    }
    // Redraw all markers on the map
    updateMap(locations) {
        // Remove all current marker
        this.marker.map(marker => marker.setMap(null));
        this.marker = [];
        for (let loc of locations) {
            let latLng = new google.maps.LatLng(loc.lat, loc.lng);
            let marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: latLng
            });
            this.marker.push(marker);
        }
    }
    ngOnInit() {
        console.log('Initializing HomePage');
        //Request permission to use push notifications
        //Ios will prompt user and return if they are granted permisson or not
        //Android will just grant permisson without prompting
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                //Register with Apple / Google to recieve push via APNS/FCM
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.register();
            }
            else {
                //Show some error
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('registration', (token) => {
            alert('Push registration success, token: ' + token.value);
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('registrationError', (error) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
            alert('Push  receive: ' + JSON.stringify(notification));
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            alert('Push action performed: ' + JSON.stringify(notification));
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore }
];
HomePage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['map',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 2820);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);







let DatabaseService = class DatabaseService {
    constructor(plt, sqlitePorter, sqlite, http) {
        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.sqlite = sqlite;
        this.http = http;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.contacts = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.names = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.phones = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.plt.ready().then(() => {
            this.sqlite.create({
                name: 'Contacts.db',
                location: 'default'
            })
                .then((db) => {
                this.database = db;
                this.seedDatabase();
            });
        });
    }
    dbState() {
        return this.dbReady.asObservable();
    }
    seedDatabase() {
        this.http.get('assets/seed.sql', { responseType: 'text' })
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
    fetchContacts() {
        return this.contacts.asObservable();
    }
    getDatabaseState() {
        return this.dbReady.asObservable();
    }
    getContact() {
        return this.names.asObservable();
    }
    getPhoneNum() {
        return this.phones.asObservable();
    }
    loadName() {
        return this.database.executeSql('SELECT * FROM contacts', []).then(data => {
            let contacts = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    let email = [];
                    if (data.rows.item(i).email != '') {
                        email = JSON.parse(data.rows.item(i).email);
                    }
                    contacts.push({
                        id: data.rows.item(i).id,
                        person_name: data.rows.item(i).name,
                        email: data.rows.item(i).email,
                        phone_num: data.rows.item(i).phone
                    });
                }
            }
            this.contacts.next(contacts);
        });
    }
    addContacts(person_name, email, phone_num) {
        let data = [person_name, JSON.stringify(email), phone_num];
        return this.database.executeSql('INSERT INTO contacts (name, email, phoneNum) VALUES (?,?,?)', data).then(data => {
            this.loadName();
        });
    }
    /*getName(id): Promise<Dev>
    {
      return this.database.executeSql('SELECT FROM contacts WHERE id = ?', [id]).then(_=> {
        let email = [];
        if(data.rows.item(0).email != '')
        {
          email = JSON.parse(data.rows.item(0).email);
        }
        return
        {
          id: data.rows.item(0).id,
          person_name: data.rows.item(0).person_name,
          email: email,
          phone_num: data.rows.item(0).phone_num
        }
      });
    }*/
    deleteContacts(id) {
        return this.database.executeSql('DELETE FROM contacts WHERE id = ?', [id]).then(_ => {
            this.loadName();
            this.loadEmail();
            this.loadPhoneNum();
        });
    }
    updateContacts(dev) {
        let data = [dev.name, JSON.stringify(dev.email), dev.phone];
        return this.database.executeSql('UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id =${dev.id}', data).then(data => {
            this.loadName();
        });
    }
    loadEmail() {
        let query = 'SELECT Email.name, Email.id, Name.name AS creator FROM email JOIN name ON name.id = email.creatorId';
        return this.database.executeSql(query, []).then(data => {
            let email = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    email.push({
                        person_name: data.rows.item(i).person_name,
                        id: data.rows.item(i).id,
                        creator: data.rows.item(i).creator,
                    });
                }
            }
            this.email.next(email);
        });
    }
    loadPhoneNum() {
        let query = 'SELECT PhoneNum.name, PhoneNum.id, Name.name AS creator FROM phone JOIN name ON name.id = phoneNum.creatorId';
        return this.database.executeSql(query, []).then(data => {
            let phoneNum = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    phoneNum.push({
                        person_name: data.rows.item(i).person_name,
                        id: data.rows.item(i).id,
                        creator: data.rows.item(i).creator,
                    });
                }
            }
            this.phones.next(phoneNum);
        });
    }
    addEmail(name, creator) {
        let data = [name, creator];
        return this.database.executeSql('INSERT INTO product (name,creatorId) VALUES (?,?)', data).then(data => {
            this.loadEmail();
        });
    }
    addPhone(name, creator) {
        let data = [name, creator];
        return this.database.executeSql('INSERT INTO product (name,creatorId) VALUES (?,?)', data).then(data => {
            this.loadPhoneNum();
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLitePorter },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 5019:
/*!*****************************************!*\
  !*** ./src/app/services/fcm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcmService": () => (/* binding */ FcmService)
/* harmony export */ });
/* harmony import */ var C_Users_Elvis_ping_app_Ping_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





const {
  PushNotifications
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
let FcmService = class FcmService {
  constructor(router) {
    this.router = router;
  }

  initPush() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  registerPush() {
    var _this = this;

    PushNotifications.requestPermission().then(permission => {
      if (permission.grantes) {
        //Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {//No permission for push granted
      }
    });
    PushNotifications.addContacts('registration', token => {
      console.log('My token: ' + JSON.stringify(token));
    });
    PushNotifications.addContacts('registrationError', error => {
      console.log('Error: ' + JSON.stringify(error));
    });
    PushNotifications.addContacts('pushNotificationReveived', /*#__PURE__*/function () {
      var _ref = (0,C_Users_Elvis_ping_app_Ping_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (notification) {
        console.log('Push received: ' + JSON.stringify(notification));
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    PushNotifications.addContacts('pushNotificationActionPerformed', /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Elvis_ping_app_Ping_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (notification) {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));

        if (data.detailsId) {
          _this.router.navigateByUrl('home/${data.detailsId');
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

};

FcmService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}];

FcmService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], FcmService);


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
    production: false,
    firebase: {
        projectId: 'ping-app-d043d',
        appId: '1:576852490775:web:5f8c19a6b6795a6eeb3a52',
        storageBucket: 'ping-app-d043d.appspot.com',
        apiKey: 'AIzaSyA8KbQp7QgPbNnzAPbZfLvNc_WrnNjm3rM',
        authDomain: 'ping-app-d043d.firebaseapp.com',
        messagingSenderId: '576852490775',
        measurementId: 'G-SJB1QFCQ5T',
    }
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
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
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

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: #f0f6f6;\n}\nion-content ion-tab-bar {\n  height: 90px;\n  position: relative;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\nion-content ion-tab-bar ion-tab-button {\n  font-size: 1.7rem;\n  --color-selected: #5b8783;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUNOO0FBQ007RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBQ1IiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YwZjZmNjtcclxuICBcclxuICAgIGlvbi10YWItYmFyIHtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gIFxyXG4gICAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgLS1jb2xvci1zZWxlY3RlZDogIzViODc4MztcclxuICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH0iXX0= */";

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
module.exports = "<ion-header>\r\n  <ion-toolbar color = \"primary\">\r\n    <ion-title>\r\n      Ping Tracking\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button tab=\"trusted-lists\">\r\n        <ion-icon name=\"people-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"history\">\r\n        <ion-icon name=\"list-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"main\">\r\n        <ion-icon name=\"radio-button-off-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"settings\">\r\n        <ion-icon name=\"settings-outline\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <div #map id=\"map\" [hidden]=\"!user\"></div>\r\n\r\n      <div *ngIf=\"user\">\r\n    \r\n        <ion-item>\r\n          <ion-label>User ID: {{ user.uid }}</ion-label>\r\n        </ion-item>\r\n    \r\n        <ion-button expand=\"block\" (click)=\"startTracking()\" *ngIf=\"!isTracking\">\r\n          <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\r\n          Start Tracking\r\n        </ion-button>\r\n    \r\n        <ion-button expand=\"block\" (click)=\"stopTracking()\" *ngIf=\"isTracking\">\r\n          <ion-icon name=\"hand\" slot=\"start\"></ion-icon>\r\n          Stop Tracking\r\n        </ion-button>\r\n    \r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let pos of locations | async\">\r\n            <ion-item>\r\n              <ion-label text-wrap>\r\n                Lat: {{ pos.lat }}\r\n                Lng: {{ pos.lng }}\r\n                <p>\r\n                  {{ pos.timestamp | date:'short' }}\r\n                </p>\r\n              </ion-label>\r\n            </ion-item>\r\n    \r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLocation(pos)\">\r\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n    \r\n          </ion-item-sliding>\r\n        </ion-list>\r\n    \r\n      </div>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map