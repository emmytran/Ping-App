import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { DbService } from './../services/db.services';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    FormsModule
  ]
})
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  mainForm: FormGroup;
  Data: any[] = []
  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }
 // constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.db.dbStatef().subscribe((res) => {
      if (res){
        this.db.fetchContacts().subscribe(item =>{
          this.Data = item
        })
      }
    });
    this.mainForm = this.formBuilder.group({
      person_name: [''],
      phone_num: ['']
    })
  }
  storeData() {
    this.db.addContacts(
      this.mainForm.value.person_name,
      this.mainForm.value.phone_num
    ).then((res) => {
      this.mainForm.reset();
    })
  }
  deleteContacts(id){
    this.db.deleteContacts(id).then(async(async res => {
      let toast = await this.toast.create({
        message: 'Contact Deleted',
      });
      toast.present();
    }))
  }
}
function async(arg0: (res: any) => Promise<void>): any {
  throw new Error('Function not implemented.');
}

