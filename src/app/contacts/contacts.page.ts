import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from '../service/db.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  editForm: FormGroup;
  id: any;
  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.db.getContact(this.id).then(res => {
      this.editForm.setValue({
        person_name: res ['person_name'],
        phone_num: res['phone_num']
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      person_name: [''],
      phone_num: ['']
    })
  }
  saveForm(){
    this.db.updateContacts(this.id, this.editForm.value)
    .then( (res) => {
      console.log(res)
      this.router.navigate(['/home']);
    })
  }

}
