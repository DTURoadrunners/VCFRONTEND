import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   *  ({1}) getter from the AuthService, which is an Observable. 
   * Since we are only interested in checking the value from the Observalbe a single time (if the user is logged in or not), 
   * we will use the take operator ({2}). 
   * We will verify the value emitted by the BehaviorSubject ({3}) and if not logged in we will 
   * navigate to the login screen ({4}) and return false. The AuthGuard will return true in case the user is 
   * logged in, meaning the user can access the route (path: ‘’) which renders the homepage.
   * @param next 
   * @param state 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    var result;
    this.authService.isLoggedIn       // {1}
      .subscribe((isLoggedIn: boolean) => {        // {3}
        if (!isLoggedIn){
          this.router.navigate(['/login']);  // {4}
          result = false;
        }
        result = true;
        });
    return result;
  }
}
