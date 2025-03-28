//const form = document.querySelector('form')!; // ! means that we are sure that the element exists
//const form = document.querySelector("form") as HTMLFormElement; // as HTMLFormElement is a type assertion
//console.log(form);
var userForm = document.querySelector(".user-form");
var userName = document.querySelector("#username");
var userEmail = document.querySelector("#useremail");
var userCountrySelect = document.querySelector('#country');
var userFeedback = document.querySelector('#feedback');
userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountrySelect.value,
        userfeedback: userFeedback.value,
    };
    console.log(data);
});
