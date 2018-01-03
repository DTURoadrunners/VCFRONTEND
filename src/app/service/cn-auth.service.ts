import { Injectable } from '@angular/core';

@Injectable()
export class CnAuthService {

  constructor() { }

  /**
   * Verifies user with the campusnet API
   * TODO implement API call
   * @param userName - campusnet username
   * @param password  - campusnet password
   */
  verify(userName: String, password: String): boolean {
    if (userName === 'admin' && password === 'pw123') {
      return true;
    }
    return false;
  }

}
