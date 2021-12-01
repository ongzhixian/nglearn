import { Country } from "../models/Country";
import { PolarQuestion } from "../models/PolarQuestion";
import { TravelInfo } from "../models/TravelInfo";

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

}