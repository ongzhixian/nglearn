import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms'

import { LogService } from '../../services/log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { appUserIsAuthenticated } from '../../state/authentication.selector';
import { login } from '../../state/authentication.actions';
import { Observable } from 'rxjs';

import { errorMessage } from '../../state/errorMessage.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: string = "";

  returnUrl : string;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  isAuthenticated$ : Observable<boolean>;
  errorMessage$ : Observable<string>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private logService: LogService,
    private store: Store<AppState>) { 

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      this.isAuthenticated$ = this.store.select(appUserIsAuthenticated);

      this.errorMessage$ = this.store.select(errorMessage);

      // this.getState = this.store.select(selectAuthenticationState);


    }

  ngOnInit(): void {
    this.logService.add("In Login OnInit");
    this.errorMessage$.subscribe((state: string) => {
      this.loginError = state;
    });

    this.isAuthenticated$.subscribe((state :boolean) => {
      this.logService.add("subscribed isAuthenticated")
      // if (state) {
      //   this.logService.add("Valid credentials");
      //   this.router.navigate([this.returnUrl]);
      // } else {
      //   this.logService.add("Invalid credentials");
      //   this.loginError = "Invalid credentials.";  
      // }
    });
  }

  login(): void {
    this.logService.add("TODO: login actions.");
  }

  onSubmit(): void {

    // Using ngrx
    
    this.logService.add(`onSubmit() ==> Username: [${this.loginForm.value.username}], Password: [${this.loginForm.value.password}]`);

    if (this.loginForm.valid) {
      this.logService.add("Form is valid; check credentials next;");

      const username :string = this.loginForm.value.username;
      const password :string = this.loginForm.value.password;

      this.store.dispatch(
        login({username, password}));

    } else {

      this.loginError = "Invalid form";
    }

  }

  onSubmitX(): void {

    this.logService.add(`onSubmit() ==> Username: [${this.loginForm.value.username}], Password: [${this.loginForm.value.password}]`);

    if (this.loginForm.valid) {
      this.logService.add("Form is validd; check credentials next;");

      // const username: string = this.loginForm.value.username;
      // const password: string = this.loginForm.value.password;

      // this.authenticationService.validateCredentials(this.loginForm).subscribe(
      //   (isValidCredentials) => {

      //     if (isValidCredentials) {
      //       this.logService.add("Validd credentials");
      //       this.router.navigate([this.returnUrl]);
      //     } else {
      //       this.logService.add("Invalidd credentials");
      //       this.loginError = "Invalid credentials.";  
      //     }
      //   }
      // );

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
    } else {
      this.loginError = "Invalid form";
    }
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
