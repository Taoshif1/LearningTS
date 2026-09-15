"use strict";
// Literal type allows only specific values
let paymentStatus = 'pending';
paymentStatus = 'success';
const printStatus = (status) => {
    console.log(`Current status: ${status}`);
};
printStatus(paymentStatus);
