function Animal(name) {
  this.name = name;
}
Animal.prototype.move = function() {
  return "walk";
};


//////////// BIRD /////////////
function Bird(name) {
  Animal.call(this, name);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// var proto = Object.create(Animal.prototype);
// Bird.prototype = proto;
// proto.constructor = Bird;

Bird.prototype.move = function() {
  return "fly";
}
Bird.prototype.hasWings = true;


//////////// FISH /////////////
function Fish(name) {
  Animal.call(this, name);
}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

Fish.prototype.move = function() {
  return "swim";
}
Fish.prototype.hasWings = false;


//////////// PENGUIN /////////////
function Penguin(name) {
  Bird.call(this, name);
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.move = Fish.prototype.move;








