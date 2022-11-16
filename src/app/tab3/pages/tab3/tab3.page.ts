import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab3Service } from '../../services/tab3.service';
import { Worker } from 'src/app/auth/shared/models/worker.model';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  userId: string;
  userData: Worker;
  name: string;
  email: string;
  cellphone: string;
  status: string;
  role: string;
  constructor(private router:Router, public tab3Service:Tab3Service) {}

  ngOnInit() {
    this.getUserData();
  }
  
  closeSesion(){
    window.localStorage.setItem('sesion','');
    this.router.navigate(['login']);
  }

  getUserData(){
    this.userId = window.localStorage.getItem('userId'); //Get local value of userId
    this.tab3Service.getUserData(this.userId).subscribe(response => {
      this.userData = response; //Set data on var
      console.log("UserData: ", this.userData); //Show values
      this.name = this.userData.name;
      this.email = this.userData.email;
      this.cellphone = this.userData.cellphone;
      this.status = this.userData.status;
      this.role = this.userData.role;
    },error=>{
      //Notificate error
      console.log(error);
    })
  }

  updateData(){
    this.router.navigate(['/user-form']);
  }

}
