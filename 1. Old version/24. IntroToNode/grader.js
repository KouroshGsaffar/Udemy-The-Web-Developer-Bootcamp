function average(arr){
    var i=0
    var sum=0
    while(i<arr.length){
        sum += arr[i];
        i++
    }
    var avg = sum/arr.length;
    return Math.round(avg);
}

var scores=[90,98,89,100,100,86,94];
console.log(average(scores));

var scores2=[40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));