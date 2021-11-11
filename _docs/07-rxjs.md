# Rxjs

## rxjs tutorial

```
// import * as rx from 'rxjs'; // import everything as 'rx'
import { of, interval } from 'rxjs';
import { map, mapTo, switchMap, mergeMap, take, concatMap, exhaustMap } from 'rxjs/operators';
// Reference: https://www.javatpoint.com/rxjs-installation
// Reference: https://www.learnrxjs.io/

// const { of } = rxjs;
// const { map } = rxjs.operators;

let ods = of(1, 2, 3);
let letters = of('a', 'b', 'c');


console.log(ods); // Observable { _subscribe: [Function (anonymous)] }

ods.subscribe(x => {
    console.log('Original: ', x); // prints 1, 2, 3
});

// Map operator
// Maps every value in ods to function
// ods.pipe(
//     map((ev, idx) => ev * idx)
//     // ev takes input from ods; idx starts from 0
//     // 1 (ev)   * 0 (idx), result = 0
//     // 2        * 1 (idx), result = 2
//     // 3        * 2 (idx), result = 6
// ).subscribe(x => {
//     console.log('Using map: ', x); // prints 0, 2, 6
// });

// mapTo
// Maps every value in ods to a constant
// ods.pipe(
//     mapTo('a')
// ).subscribe(x => {
//     console.log('Using mapTo: ', x); // prints a, a, a
// });


//

// switchMap
// Maps every value (in ods) to an observable (hence "switch") and returns values of inner-observable
// ods.pipe(
//     switchMap((x) => of(x, x ** 2, x ** 3))
// ).subscribe(x => {
//     console.log('Using switchMap: ', x);
// });

// Prints
// Using switchMap:  1 -- 1(ev) => 1 (x), 1 (x**2), 1 (x**3)
// Using switchMap:  1
// Using switchMap:  1
// Using switchMap:  2 -- 2(ev) => 2 (x), 4 (x**2), 8 (x**3)
// Using switchMap:  4
// Using switchMap:  8
// Using switchMap:  3 -- 3(ev) => 3 (x), 9 (x**2), 27 (x**3)
// Using switchMap:  9
// Using switchMap:  27

// mergeMap example1
// Maps each value in to an Observable, then flattens all of these inner Observables using mergeAll.
// mergeAll -- Flattens an Observable-of-Observables
// For this example, it generates the same output as switchMap above 
// (because `of(x, x ** 2, x ** 3))` is not an observables-of-observables (OOO? O3?)
// ods.pipe(
//     mergeMap((x) => of(x, x ** 2, x ** 3))
// ).subscribe(x => {
//     console.log('Using mergeMap: ', x);
// });

// Prints (same output as switchMap)
// Using mergeMap:  1
// Using mergeMap:  1
// Using mergeMap:  1
// Using mergeMap:  2
// Using mergeMap:  4
// Using mergeMap:  8
// Using mergeMap:  3
// Using mergeMap:  9
// Using mergeMap:  27

// OK, maybe not clear.
// Let's have another example using `interval` to generate OOOs
// interval is a generator that generates a number from 0 every passing interval as observable
// mergeMap example 2
// letters.pipe(
//     mergeMap(x => interval(1000).pipe(
//         map(i => x + i))
//     )
// ).subscribe(x => {
//     console.log('Using mergeMap2: ', x);
// });

// Prints
// Using mergeMap2:  a0 // interval => 0, 'a' + 0 = a0 // 0 is coerce to string
// Using mergeMap2:  b0
// Using mergeMap2:  c0
// Using mergeMap2:  a1 // Dumps 3 values
// Using mergeMap2:  b1
// Using mergeMap2:  c1
// Using mergeMap2:  a2 // Dumps 3 values
// Using mergeMap2:  b2
// Using mergeMap2:  c2


// switchMap example 2 (for contrast to mergeMap)
// letters.pipe(
//     switchMap(x => interval(1000).pipe(
//         map(i => x + i))
//     )
// ).subscribe(x => {
//     console.log('Using switchMap2: ', x); // prints
// });

// Prints
// Using switchMap2:  c0 // Interestingly, only 'c' (last value) is piped; shouldn't it be a0?
// Using switchMap2:  c1
// Using switchMap2:  c2
// Using switchMap2:  c3
// Using switchMap2:  c4
// Using switchMap2:  c5

// Interestingly, only 'c' (last value) is piped; shouldn't it be a0?
// The 'correct' way to understand this is that only one value can be mapped to switchMap
// Initially switchMap is mapped to 'a'
// Then      switchMap is mapped to 'b' (over-written)
// Then      switchMap is mapped to 'c' (over-written)
// Since all these take place within the interval of 1 second, we see c0, c1,...etc

// concatMap
// Maps each value to an Observable, then flattens all of these inner Observables using concatAll
// letters.pipe(
//     concatMap(ev => interval(1000).pipe(take(2)))
// ).subscribe(x => {
//     console.log('Using concatMap: ', x);
// });

// Prints -- take(2)
// Using concatMap:  0  // 'a', 0
// Using concatMap:  1  // 'a', 1
// Using concatMap:  0  // 'b', 0
// Using concatMap:  1  // 'b', 1
// Using concatMap:  0  // 'c', 0
// Using concatMap:  1  // 'c', 1

// Prints -- take(1)
// Using concatMap:  0  // 'a', 0
// Using concatMap:  0  // 'b', 0
// Using concatMap:  0  // 'c', 0

// exhaustMap
// Maps each value to an Observable, then flattens all of these inner Observables using exhaust.
// exhaust -- Flattens an OOOs by dropping the next inner Observables if the current inner is still executing.
letters.pipe(
    exhaustMap(ev => interval(1000).pipe(take(3)))
).subscribe(x => {
    console.log('Using exhaustMap: ', x);
});

// Prints
// Using exhaustMap:  0 // a,b,c is mapped to interval but 'a' is executing; so drop intervals mapped to b and c  
// Using exhaustMap:  1
// Using exhaustMap:  2
```

