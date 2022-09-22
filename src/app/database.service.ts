import { Platform } from '@ionic/angular'
import { Injectable } from '@angular/core'
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx'
import { BehaviorSubject, Observable } from 'rxjs'
import { TouchSequence } from 'selenium-webdriver'
import { RouterLinkWithHref } from '@angular/router'

export interface Dev {
    id: number,
    name: string,
    phone_num: number,
    img: string
}
@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private database: SQLiteObject;
    private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    developers = new BehaviorSubject([]);
    product = new BehaviorSubject([]);
    
    constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
        this.plt.ready().then(() => {
            this.sqlite.create({
                name: 'developer.db',
                location: 'default'
            })
            .then((db: SQLiteObject) => {
                this.database = db;
                this.seedDatabase();
            });
        });
    }

    seedDatabase() {
        this.http.get('asserts/seed.sql', { responseType: 'text'})
        .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then(_ => {
                    
                    this.loadDevelopers();
                    this.loadProducts();
                    this.dbReady.next(true);
                })
            .catch(e => console.error(e));
        });
    }

    getDatabaseState() 
    {
        return this.dbReady.asObservable();
    }
    getDevs(): Observable<Dev []> 
    {
        return this.developers.asObservable();
    }
    getProducts(): Observable<any [] >
    {
        return this.product.asObservable();
    }

    loadDevelopers()
    {
        return this.database.executeSql('SELECT * FROM developer', []).then(data =>
        {
            let developers: Dev[] = [];

            if(data.rows.length > 0)
            {
                for (var i = 0; i < data.rows.length; i++)
                {
                    let skills = [];
                    if (data.rows.item(i).skills != ' ')
                    {
                        skills = JSON.parse(data.rows.item(i).skills);
                    }
                    developers.push
                    ({
                        id: data.row.item(i).id,
                        name: data.rows.item(i).name,
                        phone_num: data.row.item(i).phone_num,
                        img: data.rows.item(i).img
                    });
                }
            }
            this.developers.next(developers);
        });
    }

    addDeveloper(name, phone_num, img)
    {
        let data = [name, JSON.stringify(phone_num), img];
        return this.database.executeSql('INSERT INTO developer (name, phone_num, img) VALUES (?,?,?)', data).then(dta =>
            {
                this.loadDevelopers();
            });
    }

    getDeveloper(id): Promise<Dev> {
        return this.database.executeSql('SELECT * FROM developer WHERE id = ?', [id]).then(data => {
          let skills = [];
          if (data.rows.item(0).skills != '') {
            skills = JSON.parse(data.rows.item(0).skills);
          }
    
          return {
            id: data.rows.item(0).id,
            name: data.rows.item(0).name,
            phone_num: 0,
            img: data.rows.item(0).img
          }
        });
      }
    
      deleteDeveloper(id) {
        return this.database.executeSql('DELETE FROM developer WHERE id = ?', [id]).then(_ => {
          this.loadDevelopers();
          this.loadProducts();
        });
      }
    
      updateDeveloper(dev: Dev) {
        let data = [dev.name, JSON.stringify(dev.phone_num), dev.img];
        return this.database.executeSql(`UPDATE developer SET name = ?, skills = ?, img = ? WHERE id = ${dev.id}`, data).then(data => {
          this.loadDevelopers();
        })
      }
    
      loadProducts() {
        let query = 'SELECT product.name, product.id, developer.name AS creator FROM product JOIN developer ON developer.id = product.creatorId';
        return this.database.executeSql(query, []).then(data => {
          let products = [];
          if (data.rows.length > 0) {
            for (var i = 0; i < data.rows.length; i++) {
              products.push({
                name: data.rows.item(i).name,
                id: data.rows.item(i).id,
                creator: data.rows.item(i).creator,
               });
            }
          }
          this.product.next(products);
        });
      }
    
      addProduct(name, creator) {
        let data = [name, creator];
        return this.database.executeSql('INSERT INTO product (name, creatorId) VALUES (?, ?)', data).then(data => {
          this.loadProducts();
        });
      }


}
