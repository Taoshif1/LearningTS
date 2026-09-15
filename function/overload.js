"use strict";
// Function overloads allow multiple valid call signatures
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}
console.log(combine(10, 20));
console.log(combine('Type', 'Script'));
