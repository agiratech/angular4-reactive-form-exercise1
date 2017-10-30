import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  validateForm: FormGroup;


  constructor(private form: FormBuilder) {
  	this.validateForm = new FormGroup({
      'name': new FormControl(),
      'email': new FormControl(),
      'age': new FormControl(),
      'address': new FormGroup({
        'country': new FormControl(),
        'city': new FormControl()
      })
    });
  }


  register(validateForm: NgForm) {
    console.log('Registration successful.');
    console.log(validateForm.value);
    alert("Hi "+validateForm.value.name+" you information are valid.")
  }
}
