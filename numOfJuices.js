
var num = 99;


function getBottles(num){
  if (num === 1){
      return "bottle";
  } 
  return "bottles";
}

while (num >= 1) {
  
  console.log(`${num} ${getBottles(num)} of juice on the wall! ${num} ${getBottles(num)} of juice! Take one down, pass it around... ${num - 1} ${getBottles(num -1)} of juice on the wall!
  `);
  // console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+
  // (num-1)+" bottles of juice on the wall!\n"); 
  // don't forget to check pluralization on the last line!
  num = num - 1;
}
