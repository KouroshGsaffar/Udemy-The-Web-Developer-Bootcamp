function printReverse(array){
    for(var i=array.length - 1; i>=0; i--){
        console.log(array[i]);
    }
}
printReverse([1,2,3,4]);


function isUniform(array){
    var first= array[0]
    for(var i=1; i<array.length;i++){
        if (first !== array[i]){
            return false;
        }
    }
    return true;
}


function sumArray(array){
    var sumarr=0;
    array.forEach(function(element){
        sumarr+=element;
    });
    return sumarr
}

function maxarr(array){
    var frist_max= array[0];
    for(i=1;i<array.length;i++){
        if(array[i]> frist_max){
            frist_max=array[i];
        }
    }
    return frist_max;
}