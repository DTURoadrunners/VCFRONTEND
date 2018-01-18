import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { logging } from 'selenium-webdriver';
import { USERS } from '../mock/mock-users';
import { User } from "../models/user";
import { CAMPUSNETUSERS } from "../mock/mock-campusnetUser";
import { CampusnetUser } from "../models/CampusnetUser";

/**
 * Handles communication related to user authorization with the API
 */
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
    if ((userName !== '' && password != '')) {
      if (USERS.find(user => user.id == userName && user.password == password)) {
        this.loggedIn.next(true);
        this.router.navigate(['/myprojects']);
        return true;
      }
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

  /**
   * Register the user with the API
   * @param userName
   * @param password
   */
  registerAccount(cnUser: CampusnetUser, password: string): boolean {
    if (cnUser.id !== '' && cnUser.password != '') {
      USERS.push(new User(cnUser.id, password, [], cnUser.name, cnUser.email, cnUser.phone, cnUser.studyline))
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }
}
