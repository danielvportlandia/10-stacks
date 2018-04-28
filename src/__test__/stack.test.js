'use strict';

const Stack = require('../lib/stack');
const LinkedList = require('../lib/linked-list');

// TESTING THE STACK CLASS
describe('stack.test.js', () => {
  describe('Stack', () => {
    test('#constructor', () => {
      const testStack = new Stack();
      expect(testStack.storage.value).toBeUndefined();
    });
    test('#push, should insert value into empty Stack.', () => {
      const testStack = new Stack();
      testStack.push(1);
      expect(testStack.storage.head.value).toEqual(1);
    });
    test('#push, should accurately keep track of tail property.', () => {
      const testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      expect(testStack.storage.tail.value).toEqual(2);
    });
    test('#push, should accurately keep track of the length property.', () => {
      const testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      expect(testStack.storage).toHaveLength(2);
    });
    test('#pop, should return undefined on an empty Stack.', () => {
      const testStack = new Stack();
      expect(testStack.storage.pop()).toBeUndefined();
    });
    test('#pop, should return the last entered value on the stack.', () => {
      const testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);
      expect(testStack.pop()).toEqual(3);
    });
    test('#pop, should accurately keep track of the tail property.', () => {
      const testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);
      testStack.pop();
      expect(testStack.storage.tail.value).toEqual(2);
    });
    test('#peek, should return undefined for an empty stack.', () => {
      const testStack = new Stack();
      expect(testStack.peek()).toBeUndefined();
    });
    test('#peek, should show value on top of stack.', () => {
      const testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);
      expect(testStack.peek()).toEqual(3);
    });
    test('#peek, should show only value in a stack containing a single value.', () => {
      const testStack = new Stack();
      testStack.push(99);
      expect(testStack.peek()).toEqual(99);
    });
    test('#isEmpty, should return true on empty stack', () => {
      const testStack = new Stack();
      expect(testStack.isEmpty()).toEqual(true);
    });
    test('#isEmpty, should return false on empty stack', () => {
      const testStack = new Stack();
      testStack.push(1);
      expect(testStack.isEmpty()).toEqual(false);
    });
    test('#isEmpty, should return false on stack with multiple storage items.', () => {
      const testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);
      expect(testStack.isEmpty()).toEqual(false);
    });
  });
});

// TESTING THE LINKEDLIST CLASS
describe('linked-list.test.js', () => {
  describe('LinkedList', () => {
    test('#constructor', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
    test('#push, should insert value into empty LinkedList.', () => {
      const testList = new LinkedList();
      testList.push(1);
      expect(testList.head.value).toEqual(1);
    });
    test('#push, should accurately keep track of tail property.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      expect(testList.tail.value).toEqual(2);
    });
    test('#push, should accurately keep track of the length property.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      expect(testList.tail.value).toEqual(2);
    });
    test('#pop, should return undefined on an empty LinkedList.', () => {
      const testList = new LinkedList();
      expect(testList.pop()).toEqual(undefined);
    });
    test('#pop, should accurately keep track of the length property.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.pop();
      const len = testList.length;
      expect(len).toEqual(0);
    });
    test('#pop, should accurately keep track of the tail property.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      testList.push(3);
      testList.pop();
      expect(testList.tail.value).toEqual(2);
    });
  });
});
