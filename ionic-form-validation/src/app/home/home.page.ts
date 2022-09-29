import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  ionicForm: FormGroup;
  defaultDate = "1987-06-25";
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators..minlength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get errorControl(){
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if(!this.ionicForm.valid){
      console.log('Please provide all the require information!')
      return false;
    }else {
      console.log(this.ionicForm.value)
    }
  }
}
