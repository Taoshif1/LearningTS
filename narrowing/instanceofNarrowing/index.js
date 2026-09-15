"use strict";
// Narrowing with instanceof
class Dog {
    bark() {
        console.log('Dog is barking');
    }
}
class Cat {
    meow() {
        console.log('Cat is meowing');
    }
}
const makeSound = (animal) => {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
};
makeSound(new Dog());
