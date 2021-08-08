/* eslint-disable require-jsdoc */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// Demonstrate the FIFO nature of Queue by printing a friendly message.
const queue = new Queue();
queue.enqueue('Hello');
queue.enqueue('World');
queue.enqueue('!');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
