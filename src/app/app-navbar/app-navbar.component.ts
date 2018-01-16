import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  isCollapsed: boolean = false;
  isLoggedIn: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  // coolapse the menu
  collapsed(event: any): void {
    console.log(event);
  }

  // expand the menu
  expanded(event: any): void {
    console.log(event);
  }

  /**
   * Calls the logout method from the AuthService, the logic is handled there. 
   */
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
