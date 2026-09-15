"use strict";
// Built-in utility types help create new types from existing types
const update = { name: 'Taoshif' };
const completeUser = { id: 1, name: 'Gazi', email: 'gazi@example.com', isAdmin: true };
const preview = { id: 1, name: 'Gazi' };
const publicUser = { id: 1, name: 'Gazi', email: 'gazi@example.com' };
const readonlyUser = completeUser;
const users = { 1: preview };
console.log(update, publicUser, readonlyUser, users);
