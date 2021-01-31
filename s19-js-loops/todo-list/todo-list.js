const Todo = [];

let userResponse = prompt("What would you like to do?");

while (userResponse !== "quit") {

    if (userResponse === "new") {
        let newTodo = prompt("Enter new todo");
        Todo.push(newTodo);
        console.log(`${newTodo} added to list`);
    }

    else if (userResponse === "list") {
        console.log("********");
        for (let items of Todo) {
            console.log(`${Todo.indexOf(items)} : ${items}`);
        }
        console.log("********");
    }

    // Did not account for non Integer responses - use ParseInt 
    // Did not account for Not a Number responses - create a check that so long as it is NOT NaN do delete operation
    else if (userResponse === "delete") {
        let index = prompt("Enter index of todo to delete");
        Todo.splice(index, 1);
        console.log("Todo Removed");
    }

    userResponse = prompt("What would you like to do?");
    
}

console.log("BOOP, the program is finished!");