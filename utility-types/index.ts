// Built-in utility types help create new types from existing types

interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

type UserUpdate = Partial<User>;
type CompleteUser = Required<User>;
type UserPreview = Pick<User, 'id' | 'name'>;
type PublicUser = Omit<User, 'isAdmin'>;
type ReadonlyUser = Readonly<User>;
type UserMap = Record<number, UserPreview>;

const update: UserUpdate = { name: 'Taoshif' };
const completeUser: CompleteUser = { id: 1, name: 'Gazi', email: 'gazi@example.com', isAdmin: true };
const preview: UserPreview = { id: 1, name: 'Gazi' };
const publicUser: PublicUser = { id: 1, name: 'Gazi', email: 'gazi@example.com' };
const readonlyUser: ReadonlyUser = completeUser;
const users: UserMap = { 1: preview };

console.log(update, publicUser, readonlyUser, users);
