import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { RegisterModel } from '../models/Register.model';
import { Globals } from '../globals/globals';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = 'log';
  user: RegisterModel = new RegisterModel();
  registerForm : FormGroup;
  loginForm: FormGroup;
  errorMessage;

  constructor(private formBuilder: FormBuilder,
    private glo: Globals,
    private router: Router) { }

  back(){
    this.form = "log";
  }
  regForm(){
    this.form = "reg";
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-z-A-Z0-9-]+\.[a-zA-Z-0-9-.]+$")
      ]]
    });

    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required
      ]]
    });
  }

  onRegisterSubmit(){
    let obj = this.user;
    this.glo.loginData.push(obj);
    this.user.name = '';
    this.user.email = '';
    this.user.password = '';
    this.form = 'log';

  }

  login(){
    console.log('success')


    let filtName = this.glo.loginData.filter((name) => name.email === this.user.email);
    if (filtName.length > 0 && filtName[0]['password'] === this.user.password){
      this.router.navigate(['/main']);
      this.errorMessage = '';
      localStorage.setItem('name', filtName[0]['email']);
    } else {
      this.errorMessage = 'Wrong password or email';
    }

  }

}
