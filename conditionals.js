/*
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


const temperature = 20;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
*/
const whichSchool  = function (age) {
  if (age > 0 && age < 13){
    console.log("Elementary School");
  } else if(age >= 13 && age <= 18){
    console.log("Secondary School");
  } else { 
    console.log("Lighthouse Labs"); }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));