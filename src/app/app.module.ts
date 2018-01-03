import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Bootstrap NG 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; // load bootstrap dropdown
import { CollapseModule } from 'ngx-bootstrap/collapse'; // load bootstrap collapse
import { AlertModule } from 'ngx-bootstrap/alert'; // load bootstrap alert
import { TabsModule } from 'ngx-bootstrap/tabs'; // load bootstrap tabs
import { ButtonsModule } from 'ngx-bootstrap/buttons'; // load bootstrap buttons


import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // load to work with angularForms
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ProjectLogComponent } from './log/project-log/project-log.component';
import { LinkComponent } from './test/link/link.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './public/login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './public/register/register.component';
import { CnAuthService } from './service/cn-auth.service';

import { OverviewComponent } from './componentype/overview/overview.component';

import { MyprojectsComponent } from './project/myprojects/myprojects.component';
import { AboutComponent } from './public/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ProjectLogComponent,
    LinkComponent,
    LoginComponent,
    RegisterComponent,
    OverviewComponent,
    MyprojectsComponent,
    AboutComponent

  ],
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    AppRoutingModule
  ],
  exports: [BsDropdownModule],
  providers: [AuthService, AuthGuard, CnAuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
