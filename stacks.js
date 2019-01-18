'use strict';

class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  //when you start a new stack, top should be null
  constructor(){
    this.top = null;
  }
  //adds data to the top
  push(data){
    //check if its empty
    if(this.top === null){
      this.top = new _Node(data, null);
    }
    // const node = this.top;
    this.top = new _Node(data, this.top);
  }

  //removes the item on top
  pop(){
    if(this.top === null){
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack){
  if(stack.top === null){
    return null;
  }
  return stack.top.data;
}

function display(stack) {
  let node = stack.top;
  while(node.next){
    console.log(node.data);
    node = node.next;
  }
}

//input: "dad" or "DAD" 
//output: true
const is_palindrome = (s) => {
  //trims spaces and special char from string
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/, '');
  const stack = new Stack();
  // stack.push(s.split());

  // str = "dad", for str[i]
  // currPop = 
  //put each char of str in the stack, using push
  // d a d
  //use pop to check each char str

  const str = s;
  for(let i=0; i < str.length; i++){
    stack.push(str[i]);
  }

  let counter = 0;
  let bool = true;
  while(stack.top.next && bool === true){
    let char = stack.top.data;
    stack.pop();
    // console.log('char is', char);
    // console.log('string end is', str[str.length-counter]);
    //if the end of str is equal to the current top then it's a palindrome
    if (char === str[counter]){
      bool = true;
      console.log('char is', char);
      console.log('string end is', str[counter]);
      console.log('bool changed to true');
    } else {
      bool = false;
      console.log('bool changed to false');
    }
    counter++;
  }
  return bool;
};

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('cat'));

//input: "[()]"
//output: string, if incorrect position and type [,],(,)
// valid: (), [], {}, 
// if no problems "null"
const parens = (str) => {
  const stack = new Stack();
  for(let i=0; i < str.length; i++){
    stack.push(str[i]);
    // console.log(str[i]);
  }
  // ) -> (
  //when there's still something in the stack, loop through
  let accumulator = 0;
  let tracker = str.length; //1
  let trackerLocation;
  while(stack.top.next && accumulator >= 0){
    //pop the stack.top.data
    const node = stack.top.data;
    stack.pop();
    //compare values 
    if(node === ')'){
      accumulator++;
      trackerLocation = tracker;
      tracker--;
    } else if (node === '('){
      accumulator--;
      trackerLocation = tracker;
      tracker--;
    } else {
      tracker--;
    }
  } 
  if (accumulator === 0) {
    return 'All good';
  } else {
    return `problem at ${trackerLocation}`;
  }
  // console.log(stack);
};

// console.log(parens('543034-455)')); // (,)

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
    console.log('peek newStack',peek(newStack));
    let tempNode = stack.pop(); 
    console.log('tempNode',tempNode);
    while(!isEmpty(newStack) && (peek(newStack) > tempNode)){
      stack.push(newStack.pop());
    }
    newStack.push(tempNode);
    console.log('newStack top after', peek(newStack));  
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
// console.log(testStack);
// display(testStack);

// display(testStack);

// if(stack.top && (stack.top.data > tempNode)){
//   newStack.push(stack.top.data);
//   console.log('new stack top is', newStack.top.data);
//   stack.pop();
//   // console.log('tempNode',tempNode.data);
// } else if (stack.top && (stack.top.data <= tempNode)){
//   // console.log(tempNode);
//   newStack.push(tempNode);
//   console.log('stacktop before switch is', stack.top.data);
//   console.log('tempNode before switch is', tempNode);
//   tempNode = stack.top.data;
//   console.log('stacktop after switch is', stack.top.data);
//   console.log('tempNode after switch is', tempNode);
//   stack.pop();
// }



// create the new Stack, 
// feed it with data 
// make the data into a variable 1, 2, 9, 5
// store current top node, make some checks (< or > value) 
// pop and insert to the new stack

const main = () => {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek, null, 2));
  //console.log(peek(starTrek));
  starTrek.pop();
  starTrek.pop();
  // display(starTrek);
};

main();