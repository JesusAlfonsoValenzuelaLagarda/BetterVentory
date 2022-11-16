import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateUserDTO } from '../../requests-dto/update-user.dto';
import { Tab3Service } from '../../services/tab3.service';
import { Worker } from '../../../auth/shared/models/worker.model';
import { VerifyPhone } from 'src/app/auth/shared/models/verifyPhone.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  //Init Var
  form:FormGroup;
  submitted:boolean= false;
  workerData:UpdateUserDTO;
  worker: Worker;

  userId: string;
  name: string;
  email: string;
  cellphone: string;
  status: string = "inactive";
  role: string = "worker";
  constructor(
    public fb:FormBuilder, 
    public router:Router, 
    public tab3Service:Tab3Service) { }

  ngOnInit() {
    //Init values
    this.initWorker();
    //Create form
    this.createForm();
  }

  returnSesion() {
    this.router.navigate(['/tabs']);
  }

  initWorker(){
    this.userId = window.localStorage.getItem('userId'); //Get local value of userId
    this.tab3Service.getUserData(this.userId).subscribe(response => {
      this.worker = response; //Set data on var
      console.log("UserData on form: ", this.worker); //Show values
      this.name = this.worker.name;
      this.email = this.worker.email;
      this.cellphone = this.worker.cellphone;
      this.status = this.worker.status;
      this.role = this.worker.role;
    },error=>{
      //Notificate error
      console.log(error);
    })
  }
  

  updateData(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    //Put values of form in a new variable
    this.workerData = this.form.value;
    this.workerData.workerId = this.userId;
    this.workerData.password = this.worker.password;
    this.workerData.role = this.role;
    this.workerData.status = this.status;
    console.log("Form Value final:", this.workerData)

    //Verify phone
    this.tab3Service.verifyPhone(this.workerData.cellphone).subscribe((response:VerifyPhone)=>{
      if(response.valid == true){
        //If is valid register the worker...
        console.log("Cellphone are valid!");
        this.tab3Service.updateUserData(this.workerData, this.userId).subscribe((response:UpdateUserDTO)=>{
          console.log("Value of response: ", response);
          this.router.navigate(['/tabs']);
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
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
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
