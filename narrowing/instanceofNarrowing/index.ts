// Narrowing with instanceof

class Dog {
    bark(): void {
        console.log('Dog is barking');
    }
}

class Cat {
    meow(): void {
        console.log('Cat is meowing');
    }
}

const makeSound = (animal: Dog | Cat): void => {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
};

makeSound(new Dog());
