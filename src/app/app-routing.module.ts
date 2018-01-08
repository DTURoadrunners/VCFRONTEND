import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectLogComponent }   from './log/project-log/project-log.component';
import { LinkComponent } from './test/link/link.component'
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './public/register/register.component';
import { OverviewComponent } from './componenttype/overview/overview.component';
import { MyprojectsComponent } from './project/myprojects/myprojects.component';
import { AboutComponent } from './public/about/about.component';
import { TabNavigatorComponent } from './componenttype/tab-navigator/tab-navigator.component';
import { ProjectTabNavigatorComponent } from './project/project-tab-navigator/project-tab-navigator.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';

// define the routes here
// canActivate: [AuthGuard] is used to protect page, can only be activated if the user is authenticated
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //link to login
  { path: 'projectLog', component: ProjectLogComponent, canActivate: [AuthGuard] },
  { path: 'link', component: LinkComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'project/:projectid/componentype/:componentypeid', 
    component: TabNavigatorComponent,
    data: {
      breadcrumb: 'component'
    }
  },  
  { 
    path: 'myprojects', 
    component : MyprojectsComponent, 
  },
  { path: 'about', component : AboutComponent },
  { path: 'profile', component: MyprofileComponent },
  { 
    path: 'project/:id', 
    component : ProjectTabNavigatorComponent,
    data: {
      breadcrumb: 'project'
    } 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
