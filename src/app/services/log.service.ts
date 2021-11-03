import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // useFactory: () => this
})
export class LogService {

  constructor(
    // @Inject('SOURCE_TYPE') private source: string
  ) { }

  trace(message: string)   { 
    let logEntry = this.createLogStatement('trace', message)
    console.trace(logEntry)
    return logEntry; 
  }

  debug(message: string)   { 
    let logEntry = this.createLogStatement('debug', message)
    console.debug(logEntry)
    return logEntry; 
  }

  info(message: string) {
    let logEntry = this.createLogStatement('info', message) 
    console.info(logEntry); 
    return logEntry;
  }

  warn(message: string)  { 
    let logEntry = this.createLogStatement('warning', message) 
    console.warn(logEntry); 
    return logEntry; 
  }

  error(message: string) {
    let logEntry = this.createLogStatement('error', message) 
    console.error(logEntry); 
    return logEntry;
  }

  createLogStatement (level: string, message: string) {
    return `${this.getCurrentDate()} [${level}] ${message}`;
    //return `${this.getCurrentDate()} [${level}] [${this.source}] ${message}`;
  }

  getCurrentDate() {
    return (new Date()).toISOString();
  }
}
