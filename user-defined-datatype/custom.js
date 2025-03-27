var users; // Array of User type
users = [];
var user1;
user1 = { userName: 'anis', userId: 101 };
users.push(user1);
var user2;
user2 = { userName: 'gazi', userId: 102 };
users.push(user2);
var user3;
user3 = { userName: 'lucky', userId: 103 };
users.push(user3);
for (var key in users) {
    console.log(users[key]);
}
var getRequest;
getRequest = 'GET';
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler('GET');
//requestHandler('POST');
/*
let user1: { name: string, age: number }; // Object with specific properties
let user2: { name: string, age: number };
let user3: { name: string, age: number };

users.push({ name: 'Gazi', age: 21 });
users.push({ name: 'Anis', age: 31 });
users.push({ name: 'Rahim', age: 40 });

//console.log(users);
for(const key in users) {
    console.log(users[key]);
    //console.log(users[key]["name"]); // only prints all the names
    //console.log(users[key]["age"]); // only prints all the ages
}
*/
//let user1: { name: string, age?: number }; // Object with optional (age?) properties
//user1 = { name: 'Gazi', age: 21 };
//console.log(user1);
