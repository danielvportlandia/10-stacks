'use strict';

const postfix = require('./lib/postfix');

const example1 = '5 3 6 * + 5 3 / - 7 +';

console.log(postfix.solve(example1));
