var todoList = {
    todos: [],
    displayTodo: function() {
        console.log("My Todo List: " + this.todos);
    },
    
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodo();
    },
    
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    },
    
    changeTodo: function(position, todoText){
        this.todos[position].todoText= todoText;
        this.displayTodo();
    },
    
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodo();
    }
    
    
};

// didnt realize i had to commit earlier versions, sorry! 