"use strict";
// access modifier: public, private, protected, readonly
// Encapsulation & Access Modifiers
// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the class and its subclasses
// readonly: can be assigned only once
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}
// Inheritance
class Student extends User {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    }
    // setter & getter
    setStudentId(studentId) {
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
let student1 = new Student("Anis", 31, 1302020015);
student1.setStudentId(2023360376);
//console.log(student1.getStudentId()); 
student1.display();
let user1 = new User("gazi", 21);
//console.log(user1.userName);
user1.display();
