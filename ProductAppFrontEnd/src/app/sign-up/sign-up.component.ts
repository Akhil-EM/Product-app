import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import {ProductsService} from '../products.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public service:ProductsService,public route:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
        }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

      this.service.add_user(this.registerForm.value)
      .subscribe((data)=>{
        console.log(data);
      
        if(JSON.parse(JSON.stringify(data)).Status=="Success")
        {
          alert("new account created successfully ");
          this.route.navigate(["view"]);
        }
        else
        {
          alert("somthing went wrong !!")
        }
      })

  }
}
