// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. 
//If the value never occurs, the function should return -1.

function lastIndexOf(myArray, value){
  let indexValue = -1;
    for(let i = 0; i < myArray.length; i++){
      //console.log("i is: "+i);
      
      if(myArray[i] === value){
        indexValue = i;
      } 
    } 
    return indexValue;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 4));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([], 3));