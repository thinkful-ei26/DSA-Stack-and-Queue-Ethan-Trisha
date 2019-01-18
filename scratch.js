'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
      
    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    if (!this.top) return null;
    return this.top.data;

  }
}

function display(stack) {
  let node = stack.top;
  while(node.next){
    console.log(node.data);
    node = node.next;
  }
}

const isEmpty = (stack) => {
  if(stack.top === null){
    return true;
  }
  return false;
};

function sortStack(stack){
  // input is (1, 2, 9, 5)
  // input stack: (5, 9, 2, 1)
  // output stack: 1, 2, 5, 9

  let newStack = new Stack();
  
  while(!isEmpty(stack)) {
    //console.log('peek newStack',peek(newStack));
    let tempNode = stack.pop(); 
    //console.log('tempNode',tempNode);
    while(!isEmpty(newStack) && (newStack.peek() > tempNode)){
      stack.push(newStack.pop());
    }
    newStack.push(tempNode);
    // console.log('newStack top after', peek(newStack));  
  }
  return newStack;
}

const testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(9);
testStack.push(5);

// console.log(sortStack(testStack));
display(sortStack(testStack));