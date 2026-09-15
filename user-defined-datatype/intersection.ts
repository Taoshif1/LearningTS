// Intersection type combines multiple types into one type

type UserInfo = {
    name: string;
    age: number;
};

type UserAddress = {
    city: string;
    country: string;
};

type User = UserInfo & UserAddress;

const user: User = {
    name: 'Gazi Taoshif',
    age: 21,
    city: 'Dhaka',
    country: 'Bangladesh',
};

console.log(user);
