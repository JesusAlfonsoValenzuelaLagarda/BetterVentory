import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Worker } from 'src/app/auth/shared/models/worker.model'
import { VerifyPhone } from '../../shared/models/verifyPhone.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  //Init Var
  form:FormGroup;
  submitted:boolean = false;
  status: string = "inactive";
  role: string = "worker";
  constructor(
    public fb:FormBuilder, 
    public router:Router, 
    public registerService:RegisterService) { }

  ngOnInit() {
        //Create form
        this.createForm();
  }

  returnToHome() {
    this.router.navigate(['/home']);
  }

  register(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    //Put values of form in a new variable
    var worker:Worker = this.form.value;
    worker.status = this.status;
    worker.role = this.role;
    console.log("Form Value final:", worker);

    console.log("Value of cellphone:", worker.cellphone);
    //Verify phone
    this.registerService.verifyPhone(worker.cellphone).subscribe((response:VerifyPhone)=>{
      if(response.valid == true){
        //If is valid register the worker...
        console.log("Cellphone are valid!");
        this.registerService.register(worker).subscribe((response:Worker)=>{
          //Navigate to home page
          this.router.navigate(['/home'])
        },error=>{
          //Notificate error
          console.log(error);
        })

      }else if (response.valid == false){
        //If is invalid, notificate
        console.log("Phone are invalid, please verify...")
      }else {
        console.log("something happened with response.valid value... ", response)
      }
    }, error=>{
      //Notificate error
      console.log(error);
    })
  }
  
  createForm(){
    this.form = this.fb.group({
      workerId: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      cellphone: ['',[Validators.required,Validators.minLength(10), Validators.maxLength(16), Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]]
    })
  }

  handleChangeStatus(event) {
    this.status = event.detail.value;
    console.log("Status:", this.status);
  }

  handleChangeRole(event) {
    this.role = event.detail.value;
    console.log("Role:", this.role);
  }
}
