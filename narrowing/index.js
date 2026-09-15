"use strict";
// type guards with typeof and Array.isArray
const printAllTodos = (todos) => {
    if (Array.isArray(todos)) {
        todos.map((todo) => console.log(todo));
    }
    else if (typeof todos === 'string') {
        console.log(todos);
    }
    else {
        console.log('todos are empty');
    }
};
const todos = ["todo1", "todo2"];
printAllTodos(todos);
