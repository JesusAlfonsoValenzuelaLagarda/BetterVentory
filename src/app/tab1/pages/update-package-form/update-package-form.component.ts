import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../../models/package.model';
import { Tab1Service } from '../../services/tab1.service';

@Component({
  selector: 'app-update-package-form',
  templateUrl: './update-package-form.component.html',
  styleUrls: ['./update-package-form.component.scss'],
})
export class UpdatePackageFormComponent implements OnInit {
  @Input() isEdit: boolean;
  form: FormGroup;
  submitted: boolean = false;
  package: Package;
  fragile: string;
  packageId: string;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    public tab1Service: Tab1Service) { }

  ngOnInit() {
    this.loadPackage();
  }
  
  returnToTab1() {
    this.router.navigate(['/tabs']);
  }

  loadPackage(){
    const subscription = this.route.params.subscribe((params) => {
      this.packageId = params['id'];
      if(!this.packageId){
        console.log(`Cannot load package: id not found`);
      }
      this.tab1Service.getPackageById(this.packageId).subscribe((response: Package) => 
      {
        this.package = response;
        console.log("Package data: ", this.package);
        this.createForm();
      }, (err) => {
          console.log("Something happened...", err);
        });
    });
  }

  createForm(){
    this.form = this.fb.group({
      product: [this.package.product, [Validators.required, Validators.maxLength(50)]],
      name: [this.package.name, [Validators.required, Validators.maxLength(50)]],
      amount: [this.package.amount,[Validators.required, Validators.maxLength(16)]]
    })
  }

  updatePackage(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    //Put values of form in a new variable
    var packageToUpdate:Package = this.form.value;
    packageToUpdate.packageId = this.packageId;
    packageToUpdate.fragile = this.fragile;
    console.log("Form Value final:", packageToUpdate)

    this.tab1Service.updatePackages(packageToUpdate, this.packageId).subscribe((response:Package)=>{
      //Navigate to home page
      this.router.navigate(['/tabs'])
    },error=>{
      //Notificate error
      console.log(error);
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
