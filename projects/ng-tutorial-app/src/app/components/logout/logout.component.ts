import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logService : LogService, 
    private authenticationService : AuthenticationService,
    private router : Router) { }

  ngOnInit(): void {
    this.logService.add("Log out.");
    this.authenticationService.logout();
    this.router.navigate(["/"]);
  }

}
