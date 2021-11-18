# Notes on JavaScript

## Exports / Imports

Different ways to export/import modules.
The difference in syntax has an impact on the environment where you are 
importing the modules into.

### Exporting

1.  module.exports = foo;   // ES5-compatible syntax using module.exports and require() infrastructure built into node.js
2.  export const foo        // ES6 named export
3.  export default foo      // ES6 default export

Ultimately (at the current state of things), we are saying there's 2 types of export/import:
1.  named
2.  default

ES6 has 2 syntax for doing the different type of export/import.
ES5 has 1 syntax for doing both.


#### Exporting using module.exports

```ES5 (default export)
module.exports = function anExportedFunc() {
    return "yup simple as that";
};
```

--OR--

```ES5 (named export)
// or bundled together in an object
exports.anExportedFunc = () => {};
exports.anExportedString = "this string is exported";
module.exports = {
    anExportedFunc,
    anExportedString,
};
```

#### Importing using require() from module.exports

```Export using module.exports
// File: ship.js
module.exports = {
  containerA,
  containerB,
};
```

```Importing using require()

// Method 1: importing the whole ship as a single variable (default import)
const ship = require("./ship.js");
console.log(ship.containerA);
console.log(ship.containerB);

// Method 2: or directly importing containers through object destructuring (named import)
const { containerA, containerB } = require("./ship.js");
console.log(containerA);
console.log(containerB);
```

### exports (Node.js)

ZX: Hmm! Maybe `exports` should be considered harmful.

The 'exports' variable is available within a module's file-level scope!
It is assigned the value of module.exports before the module is evaluated.

The idea behind using 'exports' is provide a shortcut so that 
`module.exports.f = ...` can be written more succinctly as `exports.f = ....` 
However! If a new value is assigned to `exports`, it is no longer bound to module.exports:

```
module.exports.hello = true; // Exported; (available from require() of module)
exports = { hello: false };  // Not exported, only available in the module
```

So if `module.exports` property is being completely replaced by a new object, 
You should also reassign `exports`:

```
module.exports = exports = function Constructor() {
  // ... etc.
};
```

### ES5 recommendations

// To do default export:
module.exports = function defaultExportedFunction() {};

// To do named export:
module.exports = {
  something,
  anotherThing,
};

### Another ES5 example

// File: square.js
export { name, draw, reportArea, reportPerimeter };

// File: squareConsumer.js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

-- OR --

// File: squareConsumer.js
import * as SomeSquare from './modules/square.js';


# Reference

https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
