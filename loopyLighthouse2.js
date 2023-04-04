// Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

// range should be an array of 2 numbers representing the start and end values for the loop.
// multiples should be an array of 2 numbers representing the multiples you want to replace with words.
// words should be an array of 2 strings representing the words that will replace the multiples.
// For example, say we called the function with the following arguments.

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function loopyLighthouse(range, multiples, words){
  
  for (let num = range[0]; num <= range[1]; num++) {
    let result = "";

    if(num % multiples[0] === 0){
      result +=  words[0];
    }
    if(num % multiples[1] === 0){
      result +=  words[1];
    }

    console.log(result || num);

    // if((num % multiples[0] === 0) && (num % multiples[1] === 0)){
    //   result =  words[0]+words[1];
    // } else if((num % multiples[0] === 0)){
    //   result =  words[0];
    // } else if(num % multiples[1] === 0){
    //   result = words[1];
    // } else{ result = num; }
    // console.log(result);
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
