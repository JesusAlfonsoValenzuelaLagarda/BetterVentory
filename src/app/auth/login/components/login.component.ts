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
  resp: Worker;
  workerData:Worker;
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
    //Put values of form in a new variable
    this.workerData = this.form.value;
    console.log("Form Value final:", this.workerData)
    this.loginService.logIn(this.workerData).subscribe((response:Worker)=>{
      console.log(response);
     this.resp = response;

    if(this.workerData.email==this.resp.email) //Verify email
    {
      if(this.workerData.password==this.resp.password)//Verify password
      {
        console.log("You're logged")
        window.localStorage.setItem('sesion','open'); //Set local value sesion: open
        window.localStorage.setItem('userId', this.workerData.workerId); //Set local value workerId only use in segurity
        this.router.navigate(['tabs']); //redirect to tabs
        return;
      }
      else
      {
        console.log("Something happened..."); //Notificate error
      }
    }
    else
    {
      console.log("Something happened...");  //Notificate error
    }
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
