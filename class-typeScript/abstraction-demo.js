"use strict";
/*Abstract class - abstraction helps us to hide the implementation of
something. class declared with abstract keyword. object can not be
created from abstract class. if a class extends abstract class, it
must inherit all the abstract methods*/
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
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
}
let student1 = new Student("gazi", 21, 2023360376);
student1.display();
