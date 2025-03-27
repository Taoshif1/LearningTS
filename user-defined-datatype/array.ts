//let userNames: string[];
let userNames: Array<string>;

userNames = ['Gazi', 'Anis', 'John'];

console.log(userNames[0]); // Output: Gazi

let multipleType: (string | number)[];
multipleType = ['Gazi', 20, 'Anis', 30];

console.log(multipleType); // Output: [ 'Gazi', 20, 'Anis', 30 ]


userNames.push('Smith');
console.log(userNames); // Output: [ 'Anis', 'Gazi', 'John', 'Smith' ]

userNames.sort();
console.log(userNames); // Output: [ 'Anis', 'Gazi', 'John' ]








