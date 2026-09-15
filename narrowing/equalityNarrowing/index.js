"use strict";
// Equality narrowing
const compareValues = (value, text) => {
    if (value === text) {
        // Here TypeScript knows value is a string
        console.log(value.toUpperCase());
    }
    else {
        console.log('Values are different');
    }
};
compareValues('typescript', 'typescript');
