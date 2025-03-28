var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class (Abstraction)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// Student class (Inheritance)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this._grade = grade;
        return _this;
    }
    Object.defineProperty(Student.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        enumerable: false,
        configurable: true
    });
    // Implementing abstract method (Polymorphism)
    Student.prototype.getDescription = function () {
        return "Student: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade);
    };
    return Student;
}(Person));
// Teacher class (Inheritance)
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = subject;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    // Implementing abstract method (Polymorphism)
    Teacher.prototype.getDescription = function () {
        return "Teacher: ".concat(this.name, ", Age: ").concat(this.age, ", Subject: ").concat(this.subject);
    };
    return Teacher;
}(Person));
// Create instances and demonstrate polymorphism
var student = new Student("Gazi", 21, 90);
var teacher = new Teacher("Anis", 25, "Mathematics");
console.log(student.getDescription()); // Student: Gazi, Age: 21, Grade: 90
console.log(teacher.getDescription()); // Teacher: Anis, Age: 25, Subject: Mathematics
// Encapsulation: attempting to access private properties directly will result in an error
// console.log(student._name); // Error: Property '_name' is private and only accessible within class 'Person'.
// console.log(teacher._subject); // Error: Property '_subject' is private and only accessible within class 'Teacher'.
// Use getter methods to access encapsulated properties
console.log(student.name); // Gazi
console.log(teacher.subject); // Mathematics
