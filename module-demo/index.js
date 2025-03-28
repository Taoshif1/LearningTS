"use strict";
//import { name, age } from './student';
//import { name as nam , age as boyosh , display as dekhao } from './student';
// can rename - name, age, display to nam, boyosh, dekhao respectively
//import { display } from './student';
/*
function display(): void {
    console.log(`${nam} is ${boyosh} years old.`);
}
display();
*/
Object.defineProperty(exports, "__esModule", { value: true });
// importing all the exported members of student.ts
// import (all) * as (name) student from './student';
var student = require("./student");
function display() {
    console.log("".concat(student.name, " is ").concat(student.age, " years old."));
}
display();
