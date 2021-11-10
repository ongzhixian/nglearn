import { GoogleBook } from "../models/google-book";
import { AppUser } from "../models/app-user";


export interface AppState {

  // User specific data
  
  loggedInUser: AppUser; 
  
  collection: ReadonlyArray<string>;
  
  // App-wide data
  
  books: ReadonlyArray<GoogleBook>;
}