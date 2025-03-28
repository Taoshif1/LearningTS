// type guards with typeof
// typeof variable === string/number/boolean/symbol/undefined/object/function
var printAllTodos = function (todos) {
    if (typeof todos === 'object') {
        todos.map(function (todo) { return console.log(todo); });
    }
    else if (typeof todos === 'string') {
        console.log(todos);
    }
    else {
        console.log('todos are empty');
    }
};
var todos = ["todo1", "todo2"];
printAllTodos(todos);
