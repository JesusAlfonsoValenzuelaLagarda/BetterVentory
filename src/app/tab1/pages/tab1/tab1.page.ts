import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from '../../models/package.model';
import { Tab1Service } from '../../services/tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  packages: Array<Package> = [];
  constructor(private router:Router, private tab1Service:Tab1Service) {}

  ngOnInit(){

  }

  ionViewWillEnter(){
    this.packages = [];
    this.getPackages();
  }

  getPackages(){
    this.tab1Service.getPackages().subscribe(
      (response: Package[]) => {
        Array.prototype.push.apply(this.packages, response);
        console.log("Value of packages array: ", this.packages);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToAddPackage() {
    console.log("Go to Add Form....");
    this.router.navigate(['/add-package-form']);
  }
  
  goToUpdatePackage(id: string) {
    console.log("Go to Update Form....");
    this.router.navigate(['/update-package-form', id]);
  }

}
