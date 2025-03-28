"use strict";
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}
/*
let user1 = new User('Gazi Taoshif', 21);
user1.display();

let user2 = new User('Anisul Islam', 25);
user2.display();
*/
// Inheritance
class Student extends User {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    }
}
let student1 = new Student('Gazi Taoshif', 21, 2023360376);
student1.display();
let user1 = new User('Anisul Islam', 25);
user1.display();
