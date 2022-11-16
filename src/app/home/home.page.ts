import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}
  goToLogIn() {
    this.router.navigate(['/login']);
    console.log("redirect to login");
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
    console.log("redirect to register");
  }
}
