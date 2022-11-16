import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Package } from '../../models/package.model';
import { Tab1Service } from '../../services/tab1.service';

@Component({
  selector: 'app-add-package-form',
  templateUrl: './add-package-form.component.html',
  styleUrls: ['./add-package-form.component.scss'],
})
export class AddPackageFormComponent implements OnInit {
  //Init Var
  form:FormGroup;
  submitted:boolean = false;
  fragile: string;
  constructor(
    public fb:FormBuilder, 
    public router:Router, 
    public tab1Service:Tab1Service) { }

  ngOnInit() {
    //Create form
    this.createForm();
  }

  returnToTab1() {
    this.router.navigate(['/tabs']);
  }

  savePackage(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    //Put values of form in a new variable
    var packageToSave:Package = this.form.value;
    packageToSave.fragile = this.fragile;
    console.log("Form Value final:", packageToSave)

    this.tab1Service.savePackage(packageToSave).subscribe((response:Package)=>{
      //Navigate to home page
      this.router.navigate(['/tabs'])
    },error=>{
      //Notificate error
      console.log(error);
    })
  }

  createForm(){
    this.form = this.fb.group({
      packageId: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      product: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      amount: ['',[Validators.required, Validators.maxLength(16)]]
    })
  }

  handleChangeFragile(event) {
    if(event.detail.value=="true"){
      //Push value true to fragile var
      this.fragile = event.detail.value;
      console.log("Fragile:", this.fragile);
    }else if(event.detail.value=="false"){
      //Push value false to fragile var
      this.fragile = event.detail.value;
      console.log("Fragile:", this.fragile);
    }else{
      console.log("Error");
    }
  }

}
