// type guards with typeof
// typeof variable === string/number/boolean/symbol/undefined/object/function
const printAllTodos = (todos: string[] | string | null) => {
    if (typeof todos === 'object') {
        todos.map((todo) => console.log(todo));
    }
    else if(typeof todos === 'string'){
        console.log(todos);
    }
    else {
        console.log('todos are empty');
    }
};

const todos = [ "todo1", "todo2"];
printAllTodos(todos);