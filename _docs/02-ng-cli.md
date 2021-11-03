# ng CLI

AuthorListComponent
ng generate component author-list

ng generate component author-detail 
    MessagesComponent   

ng generate service author
    AuthorService

ng generate module app-routing --flat --module=app

ng add @angular/flex-layout@latest

npm install angular-in-memory-web-api --save-dev
    as a dev dependency because we will be using it for development only:

ng generate service services/dummy
    Generate service 'dummy.service.ts' in 'app/services' folder.
    By default, service are generate as if '--flat' flag is applied.

    Comparing it to others like modules:

PS> ng generate module modules/material
    CREATE src/app/modules/material/material.module.ts (194 bytes)

    ng generate module modules/material --flat --module=app

## Ngrx

ng add @ngrx/store@latest