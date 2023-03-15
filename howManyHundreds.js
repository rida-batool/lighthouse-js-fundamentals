function howManyHundreds(num){
  if(num < 100){
    return 0;
  } else {
    let hundreds = Math.floor(num/100);
    return hundreds;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(600), "=?", 6);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);