import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from '../services/log.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private log : LogService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.log.add(JSON.stringify(request));
    return next.handle(request);
  }
}
