// Literal type allows only specific values

type Status = 'pending' | 'success' | 'failed';

let paymentStatus: Status = 'pending';
paymentStatus = 'success';

const printStatus = (status: Status): void => {
    console.log(`Current status: ${status}`);
};

printStatus(paymentStatus);
