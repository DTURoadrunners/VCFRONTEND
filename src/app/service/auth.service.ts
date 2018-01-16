import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { logging } from 'selenium-webdriver';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Control if the user is logged in or not, with BehaviorSubject

  /**
   * getter for loggedIn, also expose the Subject as an Observable. 
   * The BehaviorSubject keeps the latest value cached
   */
  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  constructor(
    private router: Router
  ) { }


  /**
   * Checks if the fields for login is validated and corresponds to an user, redircts the user to the homepage
   * TODO implement API call and login check
   * @param userName - the users username
   * @param password  - the users password
   */
  login(userName: String, password: String): boolean{
    if ((userName !== '' && password!= '' ) && (userName ==='admin' && password === 'pw123')) { 
      this.loggedIn.next(true);
      this.router.navigate(['/myprojects']); //TODO homepage
      return true;
    } 
    return false;
  }

  /**
   * Logs the user out, and sets the loggedIn variable to false, 
   * Redirects the user to the login page
   */
  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  
  registerAccount(userName: String, password: String): boolean {
    if (userName !== '' && password != '') {
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }
}
