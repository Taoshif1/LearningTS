// keyof creates a union of an object's property names

type User = {
    id: number;
    name: string;
    email: string;
};

type UserKey = keyof User;

const printUserKey = (key: UserKey): void => {
    console.log(key);
};

printUserKey('name');
