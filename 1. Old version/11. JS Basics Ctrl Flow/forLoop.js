console.log("Printing all numbers between -10 and 20")
for(var counter=-10; counter<20; counter++){
    console.log(counter)
}

console.log("Printing all even between 10 and 40")
for(counter=10; counter<41;counter++){
    if (counter%2===0){
        console.log(counter)
    }
}


console.log("Printing all odd between 300 and 333")
for(counter=300;counter<334;counter++){
    if(counter%2 !==0){
        console.log(counter)
    }
}


console.log("Printing all numbers divisible by 3 and 5 between 5 and 50")
for(counter=5;counter<51;counter++){
    if(counter%3===0 && counter%5===0){
        console.log(counter)
    }
}

