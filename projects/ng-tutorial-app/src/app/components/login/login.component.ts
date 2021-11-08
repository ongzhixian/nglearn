import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms'

import { LogService } from '../../services/log.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: string = "";

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private logService: LogService) { }

  ngOnInit(): void {
    this.logService.add("In Login OnInit");
  }

  login(): void {
    this.logService.add("TODO: login actions.");
  }

  onSubmit(): void {

    this.logService.add(`onSubmit() ==> Username: [${this.loginForm.value.username}], Password: [${this.loginForm.value.password}]`);

    if (this.loginForm.valid) {
      this.logService.add("Form is valid; check credentials next;");

      this.authenticationService.validateCredentials(this.loginForm).subscribe(
        (isValidCredentials) => {
          if (isValidCredentials) {
            this.logService.add("Valid credentials");
            this.router.navigate(['/dashboard']);
          } else {
            this.logService.add("Invalid credentials");
            this.loginError = "Invalid credentials.";
            return;
          }
        }
      );

      // this.apiService.login(this.loginForm.value)
      //   .subscribe((data) => {

      //     console.log(data);
      //     if (data.status === 200 && !data.body.ErrorCode) {
      //       this.router.navigate(['/dashboard']);
      //     } else {
      //       this.loginError = data.body.message;
      //     }
      //   },
      //     error => this.loginError = error
      //   )
    }
    this.loginError = "Invalid form";


    // this.router.navigate(["/dashboard"]);
  }

  getErrorMessage(formControl : AbstractControl) {

    if (formControl.errors?.required) {
      return "A valid is required for this field.";
    }

    if (formControl.errors?.minlength) {
      return `This field needs to have a minimal of ${formControl.errors?.minlength.requiredLength} characters.`;
    }

    return "Invalid input";

    
    // return "yaya";
    
    // console.log(typeof  formControl);

    // if (formControl.hasError('required')
    
    // debugger;

    // if (this.loginForm.value.userName.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.loginForm.value.hasError('email') ? 'Not a valid email' : '';
  }

}
