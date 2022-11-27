import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Observable } from 'rxjs/internal/Observable';
import { Contacts } from 'src/app/services/contacts';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {
  developer = null;
  emails = ' ';
  names: ' ';
  phone = ' ';
  id = ' ';

  constructor(private db: DatabaseService, private route: ActivatedRoute, private router: Router, private toast: ToastController) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
    let devId = params.get('id');
    /*this.db.getDeveloper(devId).then(data => {
      this.developer = data;
      this.emails = this.developer.email.join(',');
    });*/
   });
  }

  delete() 
  {
    this.db.deleteContacts(this.developer.id).then(() => {
      this.router.navigateByUrl('/');
    });
  }

  updateDeveloper()
  {
    let name = this.names.split(',');
    name = name.map(name => name.trim());
    this.developer.email = name;

   /* this.db.updateContacts(this.developer).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Contact Updated',
        duration: 3000
      });
      toast.present();
    });*/
  }
 
}
