import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Worker } from '../../shared/models/worker.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Init Var
  form:FormGroup;
  submitted:boolean= false;

  constructor(
    public fb:FormBuilder, 
    public router:Router, 
    public loginService:LoginService) { }

  ngOnInit() {
    //Create form
    this.createForm();
  }

  returnToHome() {
    this.router.navigate(['/home']);
  }

  logIn(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.loginService.logIn(this.form.value).subscribe((response:Worker)=>{
      console.log(response)
      //this.authService.setCredentials(response);
      this.router.navigate(['/home'])
    },error=>{
      //Notificate error
      console.log(error);
    })
  }

  createForm(){
    this.form = this.fb.group({
      workerId: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })
  }
}
