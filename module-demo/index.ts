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

// importing all the exported members of student.ts
// import (all) * as (name) student from './student';
import * as student from './student';
function display(): void {
    console.log(`${student.name} is ${student.age} years old.`);
}
display();