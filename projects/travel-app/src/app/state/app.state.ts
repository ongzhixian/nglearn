import { ActivatedRouteSnapshot } from "@angular/router";
import { Country } from "../models/Country";
import { PolarQuestion } from "../models/PolarQuestion";
import { TravelInfo } from "../models/TravelInfo";
import { Traveller } from "../models/Traveller";

export interface AppState {

    //   // User specific data

    //   loggedInUser: AppUser; 

    //   errorMessage: string;

    //   collection: ReadonlyArray<string>;

    //   // App-wide data

    //   books: ReadonlyArray<GoogleBook>;

    countries: Country[];

    selectedTravelInfo: TravelInfo;

    polarQuestion: PolarQuestion

    traveller: Traveller;

    companions: Traveller[];

    previousRoute: string;

    navigationHistory: string[];
}