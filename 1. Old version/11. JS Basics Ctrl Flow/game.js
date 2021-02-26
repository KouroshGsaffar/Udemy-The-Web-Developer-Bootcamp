var secretNumber=4;

var guess= Number(prompt("guess a number"));

if (guess===secretNumber){
    alert("You Got It Right!");
}
else if(guess>secretNumber){
    alert("Too high!");
    var guess=prompt("guess another number");
}
else{
    alert("Too low")
    var guess=prompt("guess another number")
}
// alert(guess);