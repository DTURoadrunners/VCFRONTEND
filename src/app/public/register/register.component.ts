import { Component, OnInit } from '@angular/core';
// load angular forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// load the services
import { CnAuthService } from "../../service/cn-auth.service";
import { AuthService } from '../../service/auth.service';

// load angular route
import { Router } from '@angular/router';

// load the campusnet user, used to represent how a user should look like
import { CampusnetUser } from "../../models/CampusnetUser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cnUser: CampusnetUser;
  cnVerified: boolean;
  CNForm: FormGroup; //call it with [formGroup]="CNForm" in the HTML
  passwordForm: FormGroup; //call it with [formGroup]="passwordForm" in the HTML
  dismissible = true;
  alerts: any = []; // hold all the alerts, start empty

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private cnAuth: CnAuthService, // inject the CNAuthService, to verify user
    private auth: AuthService
  ) { }

  ngOnInit() {
    /**
     * Campusnet form
     * build the form, used to know which inputs fields the whole form has and which one of them are required. Their values are set to empty on load
     */
    this.CNForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    /**
     * Registerform
     * build the form, used to know which inputs fields the whole form has and which one of them are required. Their values are set to empty on load
     */
    this.passwordForm = this.fb.group({
      newPassword: ['', Validators.required],
      repeatNewPassword: ['', Validators.required]
    });
  }

  /**
   * submit event with the following HTML (ngSubmit)="onVerifyCN()"
   * very if the user is on campusnet with the username and password
   * call the campusnet aservice to verify
   */
  onVerifyCN() {
    if (this.CNForm.valid) {
      this.cnUser = this.cnAuth.verify(this.CNForm.value.username, this.CNForm.value.password);
      if (this.cnUser != null) {
        this.cnVerified = true;
        this.alerts = [];
      }
      else {
        this.alerts.push({
          type: 'danger',
          msg: `Unable to verify DTU account`,
          timeout: 5000
        });
      }
    }
    else {
      this.alerts.push({
        type: 'danger',
        msg: 'Please fill out both fields'
      });
    }
  }

  /**
   * submit event with the following HTML (ngSubmit)="onSubmitPassword()"
   * register the user and check that the two passwords match each other. Create the user afterwards with the registerAccount from auth service
   */
  onSubmitPassword() {
    if (this.passwordForm.valid) {
      if (this.validatePassword(this.passwordForm.value.newPassword, this.passwordForm.value.repeatNewPassword)) {
        if (!this.auth.registerAccount(this.CNForm.value.userName, this.passwordForm.value.newPassword)) {
          this.alerts.push({
            type: 'danger',
            msg: 'Unable to register account'
          });
        } else { // created account
          console.log('created account');
        }
      }
      else {
        this.alerts.push({
          type: 'danger',
          msg: 'Submitted passwords do not match'
        });
      }
    }
    else {
      this.alerts.push({
        type: 'danger',
        msg: 'Please fill out both fields'
      });
    }
  }

  /**
   * Validates a password by matching with the repeated password and length
   * @param password the password suggested by the user
   * @param repeatPassword the users attempt at repeating the same password
   */
  private validatePassword(password: string, repeatPassword: string) {
    if (password.length > 0) {
      if (password == repeatPassword) {
        return true;
      }
    }
    return false;
  }
}
