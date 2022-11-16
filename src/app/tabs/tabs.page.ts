import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  logged:string;
  constructor(public router:Router) {
    this.logged = window.localStorage.getItem('sesion');
    if(this.logged==null || this.logged=="")
    {
      this.router.navigate(['login'])
    }
    else
    {
      this.router.navigate(['']);
    }
  }

}
