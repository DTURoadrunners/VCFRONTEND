import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Bootstrap NG 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; // load bootstrap dropdown
import { CollapseModule } from 'ngx-bootstrap/collapse'; // load bootstrap collapse
import { AlertModule } from 'ngx-bootstrap/alert'; // load bootstrap alert
import { TabsModule } from 'ngx-bootstrap/tabs'; // load bootstrap tabs
import { ButtonsModule } from 'ngx-bootstrap/buttons'; // load bootstrap buttons
import { AccordionModule } from 'ngx-bootstrap/accordion'; // load accordion list (expanding list)
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

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

import { OverviewComponent } from './componenttype/overview/overview.component';

import { MyprojectsComponent } from './project/myprojects/myprojects.component';
import { AboutComponent } from './public/about/about.component';
import { TabNavigatorComponent } from './componenttype/tab-navigator/tab-navigator.component';
import { DocumentsComponent } from './componenttype/documents/documents.component';
import { LogComponent } from './componenttype/log/log.component';
import { ComponentsComponent } from './componenttype/components/components.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { DocumenttableComponent } from './componenttype/documents/documenttable/documenttable.component';



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
    AboutComponent,
    TabNavigatorComponent,
    DocumentsComponent,
    LogComponent,
    ComponentsComponent,
    MyprofileComponent,
    DocumenttableComponent

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
    AppRoutingModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [BsDropdownModule],
  providers: [AuthService, AuthGuard, CnAuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
