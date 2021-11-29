// import { GoogleBook } from "../models/google-book";
// import { AppUser } from "../models/app-user";

import { Country } from "../models/Country";

export interface AppState {

    //   // User specific data

    //   loggedInUser: AppUser; 

    //   errorMessage: string;

    //   collection: ReadonlyArray<string>;

    //   // App-wide data

    //   books: ReadonlyArray<GoogleBook>;

    countries: Country[];

}