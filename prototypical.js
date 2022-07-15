
// inherits
// We've learned a couple of ways to implement class inheritance in Javascript. Let's first look at using a Surrogate.

// There are a number of steps:

Function.prototype.inherits = function(superClass) {
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
} 

// Define a Surrogate class
// Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
// Set Subclass.prototype = new Surrogate()
// Set Subclass.prototype.constructor = Subclass
// Write a Function.prototype.inherits method that will do this for you. Do not use Object.create right now; you should deeply understand what the new keyword does and how the __proto__ chain is constructed. This will help you in the upcoming Asteroids project:

function Animal(nickname){
    this.nickname = nickname;
}

Animal.prototype.walk = function() {
    console.log(this.nickname + " is walking.");
}

Dog.inherits(Animal);

function Dog(nickname) {
    this.nickname = nickname;
    
    this.talk = function() {
        console.log("Bark");
    }
}

const a = new Animal("Koko The Gorilla")
const d = new Dog("Spot")
console.log(d.walk)
console.log(a.walk)

function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function () {
    console.log(this.name + " barks!");
};

function Corgi(name) {
    Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function () {
    console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();


// function MovingObject () {}

// function Ship () {}
// Ship.inherits(MovingObject);

// function Asteroid () {}
// Asteroid.inherits(MovingObject);
// How would you test Function.prototype.inherits? A few specs to consider:

// You should be able to define methods/attributes on MovingObject that ship and asteroid instances can use.
// Defining a method on Asteroid's prototype should not mean that a ship can call it.
// Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.
// The Ship and Asteroid prototypes should not be instances of MovingObject.
// After you have written Function.prototype.inherits using the surrogate trick, refactor your solution using Object.create. Make sure to test that your updated solution works.

// You'll be writing an inherits method again for Asteroids.

