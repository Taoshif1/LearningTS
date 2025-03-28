//function signature
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Gazi Taoshif");
};
userInfo2 = function (name) {
    console.log("Hello ".concat(name));
};
userInfo3 = function (name, age) {
    return "Hello ".concat(name, ", You are ").concat(age, " years old");
};
userInfo1();
userInfo2("Gazi");
//userInfo3("Taoshif", 21);
console.log(userInfo3("Taoshif", 21));
