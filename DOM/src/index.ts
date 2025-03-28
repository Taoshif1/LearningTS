//const form = document.querySelector('form')!; // ! means that we are sure that the element exists
//const form = document.querySelector("form") as HTMLFormElement; // as HTMLFormElement is a type assertion
//console.log(form);

const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#username") as HTMLInputElement;
const userEmail = document.querySelector("#useremail") as HTMLInputElement;
const userCountrySelect = document.querySelector('#country') as HTMLSelectElement;
const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement;


userForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountrySelect.value,
        userfeedback: userFeedback.value,
    };
    console.log(data);
});










