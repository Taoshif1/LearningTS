// Custom type predicate

type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};

const isFish = (animal: Fish | Bird): animal is Fish => {
    return 'swim' in animal;
};

const moveAnimal = (animal: Fish | Bird): void => {
    if (isFish(animal)) {
        animal.swim();
    } else {
        animal.fly();
    }
};

moveAnimal({ swim: () => console.log('Fish is swimming') });
