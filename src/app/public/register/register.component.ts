import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CnAuthService } from "../../service/cn-auth.service";
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cnVerified: boolean = false;
  CNForm: FormGroup; //call it with [formGroup]="CNForm" in the HTML
  passwordForm: FormGroup; //call it with [formGroup]="passwordForm" in the HTML

  alerts: any = [];

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private cnAuth: CnAuthService, // inject the CNAuthService, to verify user
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.CNForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.passwordForm = this.fb.group({
      newPassword: ['', Validators.required],
      repeatNewPassword: ['', Validators.required]
    });
  }

  onVerifyCN() {
    if (this.CNForm.valid) {
      if (this.cnAuth.verify(this.CNForm.value.username, this.CNForm.value.password)) {
        this.cnVerified = true;
      }
      else {
        this.alerts.push({
          type: 'danger',
          msg: 'Unable to verify DTU account'
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

  onSubmitPassword() {
    if (this.passwordForm.valid) {
      if (this.validatePassword(this.passwordForm.value.newPassword, this.passwordForm.value.repeatNewPassword)) {
        if (!this.auth.registerAccount(this.CNForm.value.userName, this.passwordForm.value.newPassword)){
          this.alerts.push({
            type: 'danger',
            msg: 'Unable to register account'
          });
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
