"use strict";
// Custom type predicate
const isFish = (animal) => {
    return 'swim' in animal;
};
const moveAnimal = (animal) => {
    if (isFish(animal)) {
        animal.swim();
    }
    else {
        animal.fly();
    }
};
moveAnimal({ swim: () => console.log('Fish is swimming') });
