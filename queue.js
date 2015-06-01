// EXERCISE: Queue

// Write a class Queue, an alternative to Stack which is another subclass of Deque. Each Queue instance should afford "first in, first out" behavior, in which items are added to one end and removed from the other.


function Deque() {
var arr = [];
this.push = function(thing) {
  return arr.push(thing);
}
this.unshift = function(thing) {
  return arr.unshift(thing);
}
this.shift = function() {
  return arr.shift();
}
this.pop = function() {
  return arr.pop();
}
}


// var Stack = (function () {
//     function Stack (vals) {
//         Deque.call(this,vals);
//     }
//     var proto = new Deque([]);
//     // OR
//     // var proto = Object.create(Deque.prototype);
//     Stack.prototype = proto;
//     proto.constructor = Stack;

//     proto.unshift = undefined;
//     proto.shift = undefined;
//     proto.bottom = undefined;

//     return Stack;
// })();



var Queue = (function () {
  function Queue() {
    Deque.call(this);
  }
  var proto = new Queue([]);
  //OR
  //var proto = Object.create(Deque.prototype);
  Queue.prototype = proto;
  proto.constructor = Queue;

  proto.pop = undefined;
  proto.unshift = undefined;

  return Queue;
}) ();

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();
console.log(queue.shift());


