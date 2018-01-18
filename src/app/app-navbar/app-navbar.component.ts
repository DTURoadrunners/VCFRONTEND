import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../service/auth.service';
import { User } from "../models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  isCollapsed: boolean = false;  // variable for the collapse menu on mobile
  isLoggedIn$: Observable<boolean>; // observerble variable, will be checked on every "page", to see if the user is logged on
  user: User;

  constructor(
    private authService: AuthService
  ) { }


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // getter for the user is logged in
    this.authService.getCurrentUser.subscribe(user =>
      this.user = user
    );
  }

  /**
   * handle the callapse menu, needs to be overloaded to work in the HTML - else it won't recognize the methods 
   * @param event 
   */
  collapsed(event: any): void {
    console.log(event);
  }
 

  /**
   * handle the expand on the menu, needs to be overloaded to work in the HTML - else it won't recognize the methods 
   * @param event 
   */
  expanded(event: any): void {
    console.log(event);
  }

  /**
   * Calls the logout method from the AuthService, the logic is handled there. 
   */
  onLogout():void {
    this.authService.logout();                      
  }

}
