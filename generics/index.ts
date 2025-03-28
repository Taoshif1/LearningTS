//Generic Classes
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Usage
const numberBox = new Box(42);          // 'T' is inferred as 'number'
const stringBox = new Box("hello");     // 'T' is inferred as 'string'

const numValue: number = numberBox.getValue();
const strValue: string = stringBox.getValue();



//Generic Interfaces

interface Pair<T, U> {
    first: T;
    second: U;
}