import { GoogleBook } from "../models/google-book";

export interface AppState {
  books: ReadonlyArray<GoogleBook>;
  collection: ReadonlyArray<string>;
}