## Lab-10: Stacks

**Author**: Daniel Shelton
**Version**: 1.0.2

## Overview
This application creates a Stack class constructor whose storage values are a LinkedList. Only methods appropriate to a Stack have been created as prototypes such as (push, pop, peek, isEmpty). The TDD test suite tests for both the LinkedList and Stack class constructors.

## Architecture
The main point of entry of this application is the index.js file which transpiles the app by utilizing the babel library. This application also utilizes multiple NPM libraries and .travis.yml for its CI. The 'lib' directory contains all the helper modules such as the Node and LinkedList class constructors. The '__test__' directory contains the testing suite.

## Data Structure
    - linked-list.js requires node.js 
    - stack.js requires linked-list.js
    - A new Stack can be instantiated from main.js which creates a new Node instance from the value passed in.
    - push(value): inserts value on top of stack.
    testStack.push(5);
    - pop(): removes top value from on top of stack and returns its value.
    testStack.pop();
    - peek(): returns value of the top of the stack.
    testStack();
    - isEmpty(): returns a boolean value depending on if the Stack is empty or not.
    testStack.isEmpty();
    - Require the appropriate files in the __test__ suite test files to run tests.


## Change Log

04-27-2018 10:20pm - Application finished.
