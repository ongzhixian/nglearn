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
