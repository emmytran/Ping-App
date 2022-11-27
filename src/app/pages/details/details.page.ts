import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Plugins } from '@capacitor/core';
import { DatabaseService } from 'src/app/services/database.service';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id =null;
  editForm: FormGroup;
  constructor( 
    private route: ActivatedRoute, 
    private databaseService: DatabaseService,
    private router: Router,
    public formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
    this.editForm = this.formBuilder.group({
      person_name: [''],
      phone_num: [''],
      email: ['']
    });
  }


  saveForm(){
    this.databaseService.updateContacts(this.id, this.editForm.value)
    .then( (res) => {
      console.log(res)
      this.router.navigate(['/main'])
    })
  }



  resetBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications();
  }

}
