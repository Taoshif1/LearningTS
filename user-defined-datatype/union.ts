let userId: string | number | boolean;
userId = 123;
userId = '123';
userId = true;

function displayType(userId: string | number | boolean) {
    console.log(userId);
}

displayType(123);
displayType('123');
displayType(true);









