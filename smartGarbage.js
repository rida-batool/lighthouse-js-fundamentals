let smartGarbage = function(trash, bins){
  // if(bins[trash]){
  //   bins[trash] += 1;
  // }

  bins[trash] ? bins[trash] += 1 : "value is incorrect";

  return bins;
}

console.log(smartGarbage('sfgd', { waste: 4, recycling: 2, compost: 5 }));

