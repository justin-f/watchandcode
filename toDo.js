var todoList = {
    todos: [],
    displayTodo: function() {
        
        if (this.todos.length === 0) {
            console.log("Todo list is empty, you are lucky!");
        } else {
            console.log("My Todo List:");
        for (var i = 0; i < this.todos.length; i++) {
              if (this.todos[i].completed === true) {
                 console.log("(X) " + this.todos[i].todoText);
        } else {
                 console.log("( )" + this.todos[i].todoText);
            }
          }
        }
        
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