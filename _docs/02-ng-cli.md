# ng CLI

## Install Angular 10

npm install -g @angular/cli@10



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

npm install @ngrx/{store,store-devtools,entity,effects}


## Remove Nodejs completely
```
npm cache clean --force 
npm cache verify

```

C:\Program Files (x86)\Nodejs
C:\Program Files\Nodejs
C:\Users\{User}\AppData\Roaming\npm or open run and type appdata and click ok and open roaming there you will find npm.
C:\Users\{User}\AppData\Roaming\npm-cache or open run and type appdata and click ok and open roaming there you will find npm-cache.
C:\Users\{User}\.npmrc
C:\Users\{User}\AppData\Local\Temp\npm-*  