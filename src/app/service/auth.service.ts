import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { logging } from 'selenium-webdriver';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";

@Injectable()
export class AuthService {
  public token: any;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Control if the user is logged in or not, with BehaviorSubject
  private url: string = "http://82.211.194.195:5000/api";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /**
   * getter for loggedIn, also expose the Subject as an Observable. 
   * The BehaviorSubject keeps the latest value cached
   */
  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(
    private client: HttpClient,
    private router: Router
  ) { }


  /**
   * Checks if the fields for login is validated and corresponds to an user, redircts the user to the homepage
   * TODO implement API call and login check
   * @param userName - the users username
   * @param password  - the users password
   */
  login(userName: String, password: String): Observable<boolean> {
    return this.client.post(this.url + "/login", JSON.stringify({ username: userName, password: password }), this.httpOptions)
      .map((response: Response) => {
        let token = response.json()
          .then((text: string) => {
            localStorage.setItem('token', JSON.parse(text).Token);
            this.loggedIn.next(true);
            return true;
          });
        return false;
      });
  }

  /**
   * Logs the user out, and sets the loggedIn variable to false, 
   * Redirects the user to the login page
   */
  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  registerAccount(userName: String, password: String): boolean {
    if (userName !== '' && password != '') {
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
