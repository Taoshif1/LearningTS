// without interface
/*
let users: {
    id: number,
    name: string,
    age: number,
    }[] = [];

    let user1: {
    id: number,
    name: string,
    age: number,
} = {
    id: 1,
    name: 'Mr. Potato',
    age: 32,
};

    let user2: {
    id: number,
    name: string,
    age: number,} = { id: 2, name: 'Ms. Tomato', age: 21 };

    users.push(user1);
    users.push(user2);

    const printUserInfo = (user: { id: number, name: string, age: number }) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

    users.forEach((user) => printUserInfo(user));
*/
var users = [];
var user1 = { id: 1, name: 'Mr. Potato', age: 32 };
var user2 = { id: 2, name: 'Ms. Tomato', age: 21 };
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
