'use strict';

class _Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const node = new _Node(value);

    if(this.first === null){
      this.first = node;
    } 
    //we're making sure the pointers (next, last, prev) is taken of
    if (this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return null;
    } 
    const node = this.first;
    this.first = node.prev;

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue){
  if(!queue.first){
    return null;
  } 
  return queue.first.value;
}

function display(queue){
  let queueNode = queue.first;
  while(queueNode){
    console.log(queueNode.value);
    queueNode = queueNode.prev;
  }
}

//write a queue for spares (either men or women)

const squareDancing = (person) => {
  let dancePairs = '';   
  if(!spareQueue.first){
    spareQueue.enqueue(person);
  } else if (person.gender === spareQueue.first.value.gender) {
    spareQueue.enqueue(person);
  } else {
    dancePairs += `${person.name} and ${spareQueue.first.value.name} are dancing\n`;
    spareQueue.dequeue();
  }
  console.log(dancePairs);
};

const spareQueue = new Queue();

squareDancing({name: 'Jane', gender: 'f'});
squareDancing({name: 'Frank', gender: 'm'});
squareDancing({name: 'John', gender: 'm'});
squareDancing({name: 'Madonna', gender: 'f'});
squareDancing({name: 'David', gender: 'm'});
squareDancing({name: 'Christopher', gender: 'm'});
squareDancing({name: 'Beyonce', gender: 'f'});

display(spareQueue);

const main = () => {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // console.log(starTrekQ);
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  // console.log(peek(starTrekQ));

  // display(starTrekQ);
};



main();