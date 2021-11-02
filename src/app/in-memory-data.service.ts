import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AuthorService } from './author.service';
import { Author } from './models/author';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const authors = [
        { id : "409-56-7008", firstName: "Abrahams", lastName: "Bennet" },
        { id : "213-46-8915", firstName: "Marjorie", lastName: "Green" },
        { id : "238-95-7766", firstName: "Cheryl", lastName: "Carson" },
        { id : "998-72-3567", firstName: "Albert", lastName: "Ringer" },
        { id : "899-46-2035", firstName: "Anne", lastName: "Ringer" },
        { id : "722-51-5454", firstName: "Michel", lastName: "DeFrance" },
        { id : "807-91-6654", firstName: "Sylvia", lastName: "Panteley" },
        { id : "893-72-1158", firstName: "Heather", lastName: "McBadden" },
        { id : "724-08-9931", firstName: "Dirk", lastName: "Stringer" },
        { id : "274-80-9391", firstName: "Dean", lastName: "Straight" },
        { id : "756-30-7391", firstName: "Livia", lastName: "Karsen" },
        { id : "724-80-9391", firstName: "Stearns", lastName: "MacFeather" },
        { id : "427-17-2319", firstName: "Ann", lastName: "Dull" },
        { id : "672-71-3249", firstName: "Akiko", lastName: "Yokomoto" },
        { id : "267-41-2394", firstName: "Michael", lastName: "OLeary" },
        { id : "472-27-2349", firstName: "Burt", lastName: "Gringlesby" },
        { id : "527-72-3246", firstName: "Morningstar", lastName: "Greene" },
        { id : "172-32-1176", firstName: "Johnson", lastName: "White" },
        { id : "712-45-1867", firstName: "Innes", lastName: "del Castillo" },
        { id : "846-92-7186", firstName: "Sheryl", lastName: "Hunter" },
        { id : "486-29-1786", firstName: "Charlene", lastName: "Locksley" },
        { id : "648-92-1872", firstName: "Reginald", lastName: "Blotchet-Halls" },
        { id : "341-22-1782", firstName: "Meander", lastName: "Smith" }
    ];
    return {authors};
  }

  genId(authors: Author[]): number {
    // return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    //return authors.length > 0 ? Math.max(...authors.map(h => h.id)) + 1 : 11;
    return authors.length > 0 ? authors.length : 11;
  }
}
