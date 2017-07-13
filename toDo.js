var todoList = {
    todos: ['Todo 1', 'Todo 2', 'Todo 3'],
    
    displayTodos: function() {
            console.log('My todos: ' + this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    
    changeTodo: function(position, newTodo) {
        this.todos[position] = newTodo;
        this.displayTodos();
    }
    
};

