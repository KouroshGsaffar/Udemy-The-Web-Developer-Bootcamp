// var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
  var todos=["Buy new turtle"];
    var input = prompt("What would you like to do?")
    while (input !== "quit"){
        if (input =="list"){
            console.log(todos);
            }
            else if (input==="new"){
                var newTodo= prompt("Enter new todo");
                todos.push(newTodo)
            }
        input = prompt("What would you like to do?")
    }
    console.log("Ok, You quit the App!");
}, 500);

