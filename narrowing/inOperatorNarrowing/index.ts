// Narrowing with the in operator

type Admin = {
    name: string;
    permissions: string[];
};

type NormalUser = {
    name: string;
    email: string;
};

const printAccount = (account: Admin | NormalUser): void => {
    if ('permissions' in account) {
        console.log(`${account.name}: ${account.permissions.join(', ')}`);
    } else {
        console.log(`${account.name}: ${account.email}`);
    }
};

printAccount({ name: 'Gazi', permissions: ['read', 'write'] });
