var todoList = {
    todos: [],
    // displayTodo: function() {
        
    //     if (this.todos.length === 0) {
    //         console.log("Todo list is empty, you are lucky!");
    //     } else {
    //         console.log("My Todo List:");
    //     for (var i = 0; i < this.todos.length; i++) {
    //           if (this.todos[i].completed === true) {
    //              console.log("(X) " + this.todos[i].todoText);
    //     } else {
    //              console.log("( )" + this.todos[i].todoText);
    //         }
    //       }
    //     }
        
    // },
    
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodo();
    },
    
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
       
    },
    
    changeTodo: function(position, todoText){
        this.todos[position].todoText= todoText;
        
    },
    
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
       
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
        
   
    }
};

    
    // var displaytodoButton = document.getElementById('displayTodos');
    // var toggleAll = document.getElementById('toggleAll');
    
    // displaytodoButton.addEventListener('click', function () {
    //     todoList.displayTodo();
    //         });
    
    // toggleAll.addEventListener('click', function () {
    //     todoList.toggleAll();
    // });
    
    var handlers = {
        // displayTodo: function() {
        //     todoList.displayTodo();
        // },
        toggleAll: function() {
            todoList.toggleAll();
            view.displayTodos();
        },
        addTodo: function() {
            var addTodoText = document.getElementById('addTodoText');
            todoList.addTodo(addTodoText.value);
            addTodoText.value = '';
            view.displayTodos();
        },
        changeTodo: function() {
            var changeTodoPosition = document.getElementById('changeTodoPosition');
            var changeTodoText = document.getElementById('changeTodoText');
            todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
            changeTodoPosition.value = '';
            changeTodoText.value = '';
            view.displayTodos();
        },
        
        deleteTodo: function() {
            var deleteTodoPosition = document.getElementById('deleteTodoPosition');
            todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
            deleteTodoPosition.value = '';
            view.displayTodos();
        },
        
        toggleCompleted: function() {
            var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
            todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
            toggleCompletedPosition.value = '';
            view.displayTodos();
        }
        };
        
    var view = {
        displayTodos: function() {
            var todoUl = document.querySelector('ul');
            todoUl.innerHTML = '';
            for(var i = 0; i < todoList.todos.length; i++) {
                var todoLi = document.createElement('li');
                var todoTextCompleted = '';
                
                if (todoList.todos[i].completed === true) {
                    todoTextCompleted = '(X) ' + todoList.todos[i].todoText
                } else { 
                    todoTextCompleted = '( ) ' + todoList.todos[i].todoText
                }
                todoLi.textContent = todoTextCompleted;
                todoUl.appendChild(todoLi) 
        }
        }
    }
    
   
    
    


// didnt realize i had to commit earlier versions, sorry! 