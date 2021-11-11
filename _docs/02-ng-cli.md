# ng CLI

ng new nglearn --createApplication=false

git config --global user.email "zhixian@hotmail.com"
git config --global user.name "Zhixian Ong"

## Installing Angular 10

npm install -g @angular/cli@10

npm install -g @angular/cli@12

## New project

Using Angular12 `ng new nglearn` works.

But this (`ng new` application schematic) is broken in ng10. 
We will get the following error message:

```
npm ERR! While resolving: nglearn@0.0.0
npm ERR! Found: jasmine-core@3.6.0
npm ERR! node_modules/jasmine-core
npm ERR!   dev jasmine-core@"~3.6.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer jasmine-core@">=3.8" from karma-jasmine-html-reporter@1.7.0
npm ERR! node_modules/karma-jasmine-html-reporter
npm ERR!   dev karma-jasmine-html-reporter@"^1.5.0" from the root project
```

Translation (what the above is really saying):
We have jasmine-core@3.6.0.
But karma-jasmine-html-reporter@1.7.0 requires jasmine-core@">=3.8"

Resolution 1:

    ```ng new nglearn --skip-install```

    Open package.json and bump jasmine-core to `~3.8.0`
    Then install.

    ```npm install```

    While this works, it have a list of audit issues:   

    ```npm audit```

Resolution 2:

    Another way to go about fixing this issue is to change pin 
    the version of 'karma-jasmine-html-reporter' in 'package.json' file.
    That is to say change it from:

    "karma-jasmine-html-reporter": "^1.5.0",

    to:

    "karma-jasmine-html-reporter": "~1.5.0",

    This works too. 
    But the npm audit issues remain.
    Which make resolution 1 the better option (you use the newer stuff).


## ng commands

```ng --version```

```
PS> ng --version

   _                      _                 ____ _     ___
  / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
 / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 10.2.1
Node: 16.13.0
OS: win32 x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1002.1 (cli-only)
@angular-devkit/core         10.2.1 (cli-only)
@angular-devkit/schematics   10.2.1 (cli-only)
@schematics/angular          10.2.1 (cli-only)
@schematics/update           0.1002.1 (cli-only)
```


```ng serve --port 5500```

Defaults to port 4200 without `--port 5500` option.

```ng serve --configuration production --port 5500```

Defaults to debug build `--configuration production` option.

```ng build```

Generate production build 
(Yes, in ng12 CLI, builder defaults to configuration "production")

```ng build --watch```

`--watch` flag runs build when files change.


## ng adds

Note:   
    '@latest' considered harmful! 
    If not using the latest version of Angular, do not invoke ```ng add @ngrx/store@latest```
    Even if you are using the latest version of Angular, using latest version of any 
    component may also break application 
    (component is not updated to latest version of Angular which break component.)

### UI-related ng adds

ng add @angular/material
ng add @angular/flex-layout

## Ngrx-related ng-adds

ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtool




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


## Uninstall angular CLI

npm uninstall -g @angular/cli
npm cache clean --force