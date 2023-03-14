/* We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/

function loopyLighthouse(num){
  //var result;
  if((num % 3 === 0) && (num % 4 === 0)){
    return "LoopyLighthouse";
  } else if((num % 3 === 0)){
    return "Loopy";
  } else if(num % 4 === 0){
    return "Lighthouse";
  } else{ return num; }
}

for (let num = 100; num <= 200; num++){
  console.log(loopyLighthouse(num));   
}