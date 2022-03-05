// console.log(arguments);
// console.log(require('module').wrapper);
const C = require('./test-module-1');
const calc = new C();

console.log(calc.add(2, 5));

// exports
const { add, multiply, divide } = require('./test-module-2');
console.log(multiply(2, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
