"use strict";
// Abstract class (Abstraction)
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
// Student class (Inheritance)
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this._grade = grade;
    }
    get grade() {
        return this._grade;
    }
    // Implementing abstract method (Polymorphism)
    getDescription() {
        return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
// Teacher class (Inheritance)
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this._subject = subject;
    }
    get subject() {
        return this._subject;
    }
    // Implementing abstract method (Polymorphism)
    getDescription() {
        return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
    }
}
// Create instances and demonstrate polymorphism
const student = new Student("Gazi", 21, 90);
const teacher = new Teacher("Anis", 25, "Mathematics");
console.log(student.getDescription()); // Student: Gazi, Age: 21, Grade: 90
console.log(teacher.getDescription()); // Teacher: Anis, Age: 25, Subject: Mathematics
// Encapsulation: attempting to access private properties directly will result in an error
// console.log(student._name); // Error: Property '_name' is private and only accessible within class 'Person'.
// console.log(teacher._subject); // Error: Property '_subject' is private and only accessible within class 'Teacher'.
// Use getter methods to access encapsulated properties
console.log(student.name); // Gazi
console.log(teacher.subject); // Mathematics
