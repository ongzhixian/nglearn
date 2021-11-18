# Angular testing
      
ng test <project> [options]

--browsers
--code-coverage
--configuration production
--watch false

## When importing JSON files as data

There's a mention of adding the following lines into the `tsconfig.app.json` file for the project.
Oh wait! Add the following lines to `tsconfig.spec.json` file as well! 
Otherwise, you'll get the error message mentioned below when you run `ng test`.

```tsconfig.app.json
    "resolveJsonModule": true, 
    "esModuleInterop": true,
```

When you run test using `ng test travel-app --watch false`, 
you will get the following error:

```Error message
Error: projects/travel-app/src/app/components/dummy-page1/dummy-page1.component.ts:7:28 - error TS2732: Cannot find module '../../../assets/travel-lanes.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.

7 import TravelLaneJson from '../../../assets/travel-lanes.json';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

This is because its the same thing as running:

`ng test travel-app --watch false --ts-config=tsconfig.json`
(in which `tsconfig.json` file is in the base directory of the project).

Which means you you should really the 2 lines in the `tsconfig.json` file.

