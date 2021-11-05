# Lessons learnt!

Never use '@latest'; '@latest' considered dangerous.

## tldr; 

npm install -g @angular/cli@12

git config --global user.email "zhixian@hotmail.com"
git config --global user.name "Zhixian Ong"

ng new nglearn --createApplication=false
cd nglearn

ng generate application ngTutorialApp
ng generate application ngrxTutorialApp

ng add @angular/material
ng add @angular/flex-layout
ng add @ngrx/store


## Installation

## List all available versions of package in npm

Syntax:

    npm show <package-name> versions

Example:

    npm show @angular/cli versions

## Installing a specific version angular

Syntax:

    npm install -g <package-name>

Examples:

    npm install -g @angular/cli@10

    npm install -g @angular/cli@12

## Start a new workspace

Syntax:

    ng new <workspace-name> --createApplication=false

Example:

    ng new nglearn --createApplication=false

Notes:

    Without '--createApplication=false', a 'src' folder containing application scaffolding code would be created.


## Configure git

Example:

    git config --global user.email "zhixian@hotmail.com"
    git config --global user.name "Zhixian Ong"

## Create new application

Syntax:

    ng generate application <application-name>

Example:

    ng generate application appOne
    ng generate application appTwo

## Running application

1.  ng serve <application-name>
2.  ng serve --project=<application-name>
3.  Set 'defaultProject' in `angular.json`, run `ng serve`

Add '--port nnnnn' to serve application on specific port:

Example:

    ng serve --port 5500

## Build application for production

ng build --prod --project="exampleApp"

## Add 2nd and 3rd party libraries

ng add @angular/material

ng add @angular/flex-layout

ng add @ngrx/store
 
## Generate Material module

ng generate module modules/material --module=app
