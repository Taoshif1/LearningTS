/*Abstract class - abstraction helps us to hide the implementation of 
something. class declared with abstract keyword. object can not be 
created from abstract class. if a class extends abstract class, it 
must inherit all the abstract methods*/

abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    abstract display(): void // Abstract method (no body)
}

// Inheritance
class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
        );
    }
}

    let student1 = new Student("gazi", 21, 2023360376);
    student1.display();







