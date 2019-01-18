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
    return node;
  }
}

const main = () => {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(JSON.stringify(starTrek, null, 2));
};

main();