'use strict';

const Stack = require('../lib/stack');

const postfix = module.exports = {};

/* This function takes a string as an input and checks to see if the input is a number, 
if not, it returns the input, else, the string is converted to a number and then returned */
const isNumeric = (num) => {
  if (!num.match(/^\d{1,3}(,\d{3})*(\.\d+)?$/)) {
    return num;
  }
  const verifiedNum = num.match(/^\d{1,3}(,\d{3})*(\.\d+)?$/)[0];
  return parseFloat(verifiedNum.replace(/,/g, ''));
};
  
/* This function's input is a reverse Polish Notation Equation string, 
which parses the string into operands and operators, 
each operand is added to the stack and each operator pops the top 2 values 
from the stack and evaluates them, the evaluated value is pushed back onto the stack. */
postfix.solve = (str) => {
  const polishStack = new Stack();
  const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    if (typeof isNumeric(strArray[i]) === 'number') {
      polishStack.push(isNumeric(strArray[i]));
    } else {
      const a = polishStack.pop();
      const b = polishStack.pop();
      if (strArray[i] === '+') {
        polishStack.push(b + a);
      } else if (strArray[i] === '-') {
        polishStack.push(b - a);
      } else if (strArray[i] === '*') {
        polishStack.push(b * a);
      } else if (strArray[i] === '/') {
        polishStack.push(b / a);
      } else if (strArray[i] === '^') {
        polishStack.push((b ** a));
      }
    }
  }
  if (polishStack.length > 1) {
    return new Error('Error occured, the stack still has unresolved values.');
  }
  return polishStack.pop();
};
