// One interface can extend another interface

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    studentId: number;
}

const student: Student = {
    name: 'Gazi Taoshif',
    age: 21,
    studentId: 2023360376,
};

console.log(student);
