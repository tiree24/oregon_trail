
//Following this example, create two different types of classes using constructor functions 
//and prototype methods: a Traveler and a Wagon.

// A Traveler has a few properties:

// a name (string) that must be provided as a parameter to the constructor
// an amount of food (number) with an initial value of 1
// an isHealthy (boolean) to indicate whether they are sick, with an initial value of true
// A Wagon has a few properties as well:

// a capacity (number) that must be provided as a parameter to the constructor, sets 
//the maximum number of passengers the wagon can hold
// a passengers list (array) which is initially empty
// Operations
// Write the following prototype methods:

// Traveler.prototype.hunt()
// Increase the traveler's food by 2.

// Traveler.prototype.eat()
// Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the
// traveler is no longer healthy.

// Wagon.prototype.getAvailableSeatCount()
// Return the number of empty seats, determined by the capacity set when the wagon was created,
// compared to the number of passengers currently on board.

// Wagon.prototype.join(traveler)
// Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, 
// don't add them.

// Wagon.prototype.shouldQuarantine()
// Return true if there is at least one unhealthy person in the wagon. Return false if not.

// Wagon.prototype.totalFood()
// Return the total amount of food among all occupants of the wagon.



function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;

}

Traveler.prototype.hunt = function () {
    this.food = this.food + 2
    // this.food += 2

}

Traveler.prototype.eat = function () {
    //  Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the
    // traveler is no longer healthy.

    if (this.food === 0) {
        this.isHealthy = false
    }
    else {
        this.food = this.food - 1
    }



}

console.log(Traveler)



function Wagon(capacity) {
    this.capacity = capacity
    this.passengers = []
}
Wagon.prototype.getAvailableSeatCount = function () {
    return this.capacity - this.passengers.length
}

Wagon.prototype.join = function (traveler) {
    this.getAvailableSeatCount()
    if (this.getAvailableSeatCount() !== 0) {
        this.passengers.push(traveler)
    }


}

Wagon.prototype.shouldQuarantine = function () {
    // Wagon.prototype.shouldQuarantine()
    // Return true if there is at least one unhealthy person in the wagon. Return false if not.
    for (let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].isHealthy) {

        } else {
            return true
        }
    }
    return false
}



Wagon.prototype.totalFood = function () { 
// Return the total amount of food among all occupants of the wagon.

}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);