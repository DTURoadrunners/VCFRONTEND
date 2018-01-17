import { Injectable } from '@angular/core';
import { CampusnetUser } from './../models/CampusnetUser'
import { CAMPUSNETUSERS } from './../mock/mock-campusnetUser'

/**
 * Handles authorization with the Campusnet API
 */
@Injectable()
export class CnAuthService {

  constructor() { }

  /**
   * Verifies user with the campusnet API
   * @param userName - campusnet id (studentnumber)
   * @param password  - campusnet password
   */
  verify(userName: String, password: String): CampusnetUser {
    if (userName == 'admin' && password == 'pw123') {
      return CAMPUSNETUSERS[0];
    }
    return null;
  }

}
