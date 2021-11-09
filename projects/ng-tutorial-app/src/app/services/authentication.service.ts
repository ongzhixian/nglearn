import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated : boolean = false;

  constructor(private log : LogService) { }

  // login(userName: string, password: string): Observable {
  //   console.log(userName);
  //   console.log(password);

  //   this.isUserLoggedIn = userName == 'admin' && password == 'admin';
  //   localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

  //   return of(this.isUserLoggedIn).pipe(
  //     delay(1000),
  //     tap(val => {
  //       console.log("Is User Authentication is successful: " + val);
  //     })
  //   );
  // }

  // login() : void {
    
  // }

  validateCredentials(formGroup : FormGroup) : Observable<Boolean> {
    const loginForm = formGroup.controls;
    this.isAuthenticated = (loginForm.username.value === "admin") && (loginForm.password.value === "admin");
    localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
    return of( this.isAuthenticated ).pipe(
      delay(1000),
      tap(val => { 
        this.log.add(`User authentication ${val ? "successful" : "failed"}`); 
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }
}
