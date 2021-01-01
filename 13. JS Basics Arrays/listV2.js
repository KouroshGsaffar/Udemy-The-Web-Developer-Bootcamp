// var todos = ["Buy New Turtle"];
window.setTimeout(function() {
    // put all the rest of your JS code from the lecture here
    var todos=["Buy new turtle"];
      var input = prompt("What would you like to do?")
      while (input !== "quit"){
          if (input =="list"){
              listTodos();
            }
            else if (input==="new"){
                  addTodo();
                }
            else if (input==="delete"){
                deleteTodo();
            }
          input = prompt("What would you like to do?");
      }
      console.log("Ok, You quit the App!");
      function listTodos(){
        console.log("*******");
        todos.forEach(function(todo,i){
            console.log(i + ": " + todo);    
          });
          console.log("*******");
      }
      function addTodo(){
        var newTodo= prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added Todo");
      }
      function deleteTodo(){
        var index = prompt("enter index of todo to delete");
        todos.splice(index,1);
        console.log("Deleted Todo");
      }
  }, 500);
  
   