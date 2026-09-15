"use strict";
// Typed Promise and async/await
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getLocalUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.resolve({
        id: 1,
        name: 'Gazi Taoshif',
        email: 'taoshif@example.com',
    });
});
// Example of a typed API request
const fetchUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return (yield response.json());
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield getLocalUser();
        console.log(user);
        // Uncomment when you want to test a real API request
        // console.log(await fetchUser(1));
        console.log(typeof fetchUser);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
});
run();
