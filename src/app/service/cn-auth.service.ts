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
  private casCodeHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'responseType': 'text'
    })
  };
  private userInfoHeaders = {
    headers: new HttpHeaders({
      'x-appname': 'Opslagsystem for Økobil',
      'x-token': '3ddfc095-5a62-4162-a058-5bc3784e36d7',
      'Authorization': 'Basic czE1NDE3NDo5QkJFNjAwMi00MDQxLTQ2OTgtQUQwNC02MDlENkQxNzlBQUQ='
    })
  };
  private registerHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'responseType': 'text'
    })
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
  verify(userName: String, password: String): Observable<CampusnetUser> {
    var casCode = this.client.post( //Get Campusnet secret password
      "https://auth.dtu.dk/dtu/mobilapp.jsp",
      "username=" + userName + "&password=" + password,
      this.casCodeHeaders)
      .map((response : string) => {
          return casCode = response.substring(response.indexOf('"'), response.lastIndexOf('"'));
      });
    if (casCode) {
      return this.client.get( //Get user details
        "http://www.campusnet.dtu.dk/data/CurrentUser/Userinfo",
        this.userInfoHeaders
      )
        .map((response: string) => {
            var userInfo: string[] = response.split(" ");

            var id: string = userInfo.find(str => str.startsWith("UserName=")).substring(response.indexOf('"'), response.lastIndexOf('"'));
            var name: string = userInfo.find(str => str.startsWith("GivenName=")).substring(response.indexOf('"'), response.lastIndexOf('"')) + " " +
              userInfo.find(str => str.startsWith("FamilyName=")).substring(response.indexOf('"'), response.lastIndexOf('"'));
            var email: string = userInfo.find(str => str.startsWith("Email=")).substring(response.indexOf('"'), response.lastIndexOf('"'));
            let user = new CampusnetUser(id, name, email, "", "");
            return user;
        });
    }
  }

  /**
   * Registers the user with the API
   */
  /*register(): Observable<boolean> {
        this.client.post( //Register user in


      );
  }*/
}
