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

  // Previous implementation where we call service directly from Component
  // Aside: Yeah, its probably not ideal to pass FormGroup as a parameter; 
  // (But doing it anyways as a proof-of-concept).
  //
  // validateCredentials(formGroup : FormGroup) : Observable<Boolean> {
  //   const loginForm = formGroup.controls;
  //   this.isAuthenticated = (loginForm.username.value === "admin") && (loginForm.password.value === "admin");
  //   // localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
  //   sessionStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
  //   return of( this.isAuthenticated ).pipe(
  //     delay(1000),
  //     tap(val => { 
  //       this.log.add(`User authentication ${val ? "successful" : "failed"}`); 
  //     })
  //   );
  // }

  // Restructure this 
  validateCredentials(username: string, password: string) : Observable<Boolean> {
    
    this.isAuthenticated = (username === "admin") && (password === "admin");
    // localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
    sessionStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
    return of( this.isAuthenticated ).pipe(
      delay(1000),
      tap(val => { 
        this.log.add(`User authentication ${val ? "successful" : "failed"}`); 
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    // localStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.clear();

  }
}
