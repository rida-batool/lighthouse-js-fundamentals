var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
function testPop(donut){
  donut.pop();
  return donuts;
}

console.log(testPop(donuts));