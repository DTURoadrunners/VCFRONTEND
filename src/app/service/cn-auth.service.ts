import { Injectable } from '@angular/core';
import { CampusnetUser } from './../models/CampusnetUser'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { logging } from 'selenium-webdriver';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";

@Injectable()
export class CnAuthService {

  private url: string = "http://localhost:54875/api";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'text' })
  };
  private cnUser: CampusnetUser;

  constructor(
    private client: HttpClient,
    private router: Router
  ) { }


  /**
   * Verifies user with the campusnet API
   * @param userName - campusnet username
   * @param password  - campusnet password
   */
  verify(userName: String, password: String): Observable<CampusnetUser>{
    return this.client.post(
      "https://auth.dtu.dk/dtu/mobilapp.jsp",
      "username=" + userName + "&password=" + password, this.httpOptions)
      .map((response: Response) => {
        let casCode = response.text().then(text => {
          return text.substring(text.indexOf('"'), text.lastIndexOf('"'))
        });
        console.log(casCode);
        if (casCode) {
          return null;
        }
        return null;
      });
  }

  /**
   * Registers the user with the API
   */
  /*register(): Observable<boolean> {

  }*/
}
