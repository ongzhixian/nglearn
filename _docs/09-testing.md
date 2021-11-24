# Angular testing
      
ng test <project> [options]

--browsers
--code-coverage
--configuration production
--watch false

## When importing JSON files as data

When importing JSON files like so: `import TravelLaneJson from '../../../assets/travel-lanes.json';`

You might get this error message suggestion:

`Consider using '--resolveJsonModule' to import module with '.json' extension.`

The full message may look like:

```Error message
Error: projects/travel-app/src/app/components/dummy-page1/dummy-page1.component.ts:7:28 - error TS2732: Cannot find module '../../../assets/travel-lanes.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.

7 import TravelLaneJson from '../../../assets/travel-lanes.json';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

To fix this, you need to add the following 2 configuration under the compiler options:

```compilerOptions
    "resolveJsonModule": true, 
    "esModuleInterop": true,
```

There are 3 files where you might need to add this (depending on how your source code is structured):

1.  tsconfig.app.json   (project-level)
    (needed to get the application for the specific project).
2.  tsconfig.spec.json  (project-level)
    (needed for ng test to working without generating that error).
3.  tsconfig.json       (monorepo-level)
    (optional: needed to fix warnings in Visual Studio Code; otherwise we will get red squiggles.
    methinks this is a vs code bug (false positive); it annoying (misleading) but not forcing the issue here).
    

More details:

There's a mention of adding the following lines into the `tsconfig.app.json` file for the project.
(Oh wait! Add the following lines to `tsconfig.spec.json` file as well! 
Otherwise, you'll get the error message mentioned below when you run `ng test`.)

```tsconfig.app.json
    "resolveJsonModule": true, 
    "esModuleInterop": true,
```

When you run test using 
`ng test travel-app --watch false`, 

Its the same thing as running:

`ng test travel-app --watch false --ts-config=tsconfig.json`
(in which `tsconfig.json` file is in the base directory of the project).

It might be tempting to do:

`ng test travel-app --watch false --ts-config=./projects/travel-app/src/tsconfig.json`

But this really doesn't work (I think it breaks the relative referencing somehow).

The other way to fix this is to add the lines to the `tsconfig.json` file.
But the caveat here is that this would impact all projects under the monorepo.

## Unit testing frameworks

1.  Mocha
    Highly extensible (possibly because its a prop-up store :-D
    Relies on third-party assertions, mocking, and spying tools.
    (Spies are objects that keep track of their interaction with other objects or pieces of code. 
    They can be used to verify that a method was called, or to assert that a method was called with certain arguments).
2.  Jest (by Facebook)
3.  Jasmine (by Pivotal Labs)
    Baked into Angular projects by default!
    BDD-like syntax.
    Test files must have a specific suffix (e.g., spec.js)
    Assertion library is not as rich as Chai
4.  AVA
    Minimalist.
5.  Testing library (https://testing-library.com/)
    

See: https://blog.logrocket.com/the-best-unit-testing-frameworks-for-node-js

## e2e testing

Protractor is being sunset!
The Angular team plans to end development of Protractor at the end of 2022 (in conjunction with Angular v15).

See: https://github.com/angular/protractor/issues/5502

Alternatives (in no order or preference):


1.  Cypress
    Cypress is an open-source Javascript/Typescript framework that enables unit testing, integration testing, and end-to-end testing built on Node.js. 
    Unlike Protractor or WebdriverIO, Cypress runs on its own browser (so we can expect fewer failures?).
    Ships with Chai assertion library.
    For reasons as to why Cypress is not ideal, see: https://dev.to/davert/5-reasons-you-should-not-use-protractor-in-2019-3l4b
2.  PlayWright (From Microsoft)
    Allows automation of modern web apps across modern browsers like Google Chrome and Microsoft Edge by using Chromium, Apple Safari by using WebKit, and Mozilla Firefox..
    Playwright is a headless browser testing framework that enables end-to-end testing.
    Requires a assertion library like Jest's expect.
3.  Puppeteer (Google Chrome headless browser testing framework)
    Allows automation of modern web apps with focus on Google Chrome.  
    Syntax is similar to Playwright; also requires a assertion library like Jest.
4.  Selenium-webdriver (most similar to Protractor)
    Possibly the predecessor of all these automation frameworks (hence laying down the foundation for Protractor as well).
    Selenium uses the WebDriver protocol to interface with the browser which uses a server to interact with the browser like ChromeDriver or the geckodriver for Firefox. 
    In terms of APIs, selenium-webdriver is most similar to Protractor because it is used under the hood. 
    If your tests still use Control Flow, you’ll have to remove it first by adding async / await to the Protractor calls. 
    After that, you can replace the Protractor methods with those in selenium-webdriver. Although they are not 1:1 replacements, they are very close.
5.  TestCafe
    Based off JavaScript.
    Allows running tests out-of-the-box without any need for WebDriver. 
    It also has the capability of running on all modern browsers.
6.  WebdriverIO
    Run on both the WebDriver and Chrome DevTools protocol to automate browser testing.
7.  codeceptjs
    BDD-like syntax.


See: https://applitools.com/blog/migrating-protractor-tests-angular/

We probably want to look at Cypress (popular) and Playwright (supports other language likes Python, Java and .NET languages).