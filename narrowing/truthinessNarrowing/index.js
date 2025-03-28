// false -> 0,NaN,"" (the empty string), 0n (the bigint version of zero), null, undefined
var printAllTodos = function (todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log('todos are empty');
    }
};
var todos1 = null;
var todos2 = ['todo1', 'todo2', 'todo3'];
printAllTodos(todos1);
printAllTodos(todos2);
