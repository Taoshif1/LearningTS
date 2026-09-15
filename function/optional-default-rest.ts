// Optional parameter, default parameter and rest parameter

const createUser = (name: string, age?: number): string => {
    return age ? `${name} is ${age} years old` : `${name} did not provide age`;
};

const greetUser = (name: string, greeting: string = 'Hello'): string => {
    return `${greeting}, ${name}`;
};

const addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((total, number) => total + number, 0);
};

console.log(createUser('Gazi'));
console.log(greetUser('Taoshif'));
console.log(addNumbers(10, 20, 30));
