import { Component, OnInit } from '@angular/core';

// load angular forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// load authservice, used to call all the methods
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup; // formbuilder, call it with [formGroup]="form" in the HTML   
  private formSubmitAttempt: boolean;  // submit flag
  dismissible = true;
  alerts: any = []; // hold all the alerts, start empty


  constructor(
    private fb: FormBuilder,         // inject the formbilder
    private authService: AuthService // inject the AuthService, used to call the login method
  ) {}

  ngOnInit() {
    /**
     * build the form, used to know which inputs fields the whole form has and which one of them are required. Their values are set to empty on load
     */
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  
  /**
   * the user submits the values
   * the AuthService that will be responsible for the login logic.
   */
  onSubmit() {
    if (this.form.valid) {
      if (!this.authService.login(this.form.value.userName, this.form.value.password)) {
        this.alerts.push({
          type: 'danger',
          msg: `Wrong username or password`,
          timeout: 5000
        });
       
      } 
    }
    this.formSubmitAttempt = true;             
  }

}
