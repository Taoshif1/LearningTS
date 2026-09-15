"use strict";
// Narrowing with the in operator
const printAccount = (account) => {
    if ('permissions' in account) {
        console.log(`${account.name}: ${account.permissions.join(', ')}`);
    }
    else {
        console.log(`${account.name}: ${account.email}`);
    }
};
printAccount({ name: 'Gazi', permissions: ['read', 'write'] });
