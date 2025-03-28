// access modifier: public, private, protected, readonly

// Encapsulation & Access Modifiers
// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the class and its subclasses
// readonly: can be assigned only once

class User {
    readonly userName: string;  // can be assigned only once
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// Inheritance
class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
        );
    }

    // setter & getter
    setStudentId(studentId: number): void {
        this.studentId = studentId;
    }
    getStudentId(): number {
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





