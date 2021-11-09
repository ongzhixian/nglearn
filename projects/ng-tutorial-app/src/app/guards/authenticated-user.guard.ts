import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { LogService } from '../services/log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
  
  constructor(private authenticationService: AuthenticationService, 
    private router: Router,
    private log : LogService) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let url: string = state.url;

      this.log.add(`AuthenticatedUserGuarding: ${url}`);

      // let isAuthenticatedStr: string = localStorage.getItem('isAuthenticated');

      if (this.authenticationService.isAuthenticated)
        return true;

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;

    //   if(isAuthenticatedStr != null && isAuthenticatedStr === "true"){

    //     if(url == "/login")
    //        this.router.parseUrl('/expenses');
    //     else 
    //        return true;
    //  } else {
    //     return this.router.parseUrl('/login');
    //  }

      // debugger;
      // We want to get route
      // 

    // return true;
  }

//   checkLogin(url: string): true | UrlTree {
//     console.log("Url: " + url)
//     let val: string = localStorage.getItem('isAuthenticated');

//     if(val != null && val == "true"){
//        if(url == "/login")
//           this.router.parseUrl('/expenses');
//        else 
//           return true;
//     } else {
//        return this.router.parseUrl('/login');
//     }
//  }
  
}
