// Mapped type loops through properties of another type

type Optional<T> = {
    [K in keyof T]?: T[K];
};

type User = {
    name: string;
    age: number;
};

type OptionalUser = Optional<User>;
const user: OptionalUser = { name: 'Gazi' };

// Conditional type chooses a type based on a condition
type IsString<T> = T extends string ? 'yes' : 'no';

type CheckName = IsString<string>;
type CheckAge = IsString<number>;

const nameCheck: CheckName = 'yes';
const ageCheck: CheckAge = 'no';

console.log(user, nameCheck, ageCheck);
