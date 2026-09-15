"use strict";
// Generic constraints limit which types a generic can accept
const printLength = (value) => {
    console.log(value.length);
};
printLength('TypeScript');
printLength([10, 20, 30]);
// keyof with generics keeps object property access type-safe
const getProperty = (object, key) => {
    return object[key];
};
const user = { name: 'Gazi', age: 21 };
console.log(getProperty(user, 'name'));
