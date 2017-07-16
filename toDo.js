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
    },
    
    toggleAll: function() {
        var totalCompleted = 0;
        var totalTodos = this.todos.length;
        
       //get the total of completed todos
       for (var i = 0; i < totalTodos; i++) {
           if(this.todos[i].completed === true) {
               totalCompleted++;
           }
       }
       
        //if all true, change to false
        if(totalCompleted === totalTodos) {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
                }
       //if all is false, change to true
        } else {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodo(); 
   
    }
};

    
    var displaytodoButton = document.getElementById('displayTodos');
    var toggleAll = document.getElementById('toggleAll');
    
    displaytodoButton.addEventListener('click', function () {
        todoList.displayTodo();
            });
    
    toggleAll.addEventListener('click', function () {
        todoList.toggleAll();
    });
        
        
   
    
    


// didnt realize i had to commit earlier versions, sorry! 