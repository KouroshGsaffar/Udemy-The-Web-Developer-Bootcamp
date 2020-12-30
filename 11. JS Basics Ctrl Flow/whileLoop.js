console.log("Printing all numbers between -10 and 20")
var counter=-10
while(counter<20){
    console.log(counter);
    counter++;
}


console.log("Printing all even between 10 and 40")
var counter=10
while(counter<41){
    if (counter%2===0){
        console.log(counter);
    }
    counter++;
}

console.log("Printing all odd between 300 and 333")
var counter=300
while(counter<334){
    if (counter%2 !== 0){
        console.log(counter);
    }
    counter++;
}

console.log("Printing all numbers divisible by 3 and 5 between 5 and 50")
var counter=5
while(counter<51){
    if (counter%3 === 0 && counter%5 === 0){
        console.log(counter);
    }
    counter++;
}