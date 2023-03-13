

// function multiply(a,b){
//    return a * b;
// }

// const result = multiply(2,4);

// console.log(result);

//indexing
//var quote = "Stay awhile and listen!";
//console.log(quote[6]);

//comparing strings
/*
console.log("green" > "blue"); //True
console.log("Green" > "green"); //False
console.log("green" > "Green"); //true


console.log("3">1);
*/

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === true){
    if (isActive === true && balance > 0){
        console.log("Your balance is $"+balance+".");
    }
    else if(isActive === true && balance === 0){
        console.log("Your account is empty.");
    }
    else if(isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");    
    }
    else if(isActive !== true){
      console.log("Your account is no longer active.");
    }
  }
else {console.log("Thank you. Have a nice day!");}

