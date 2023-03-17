


function range(start, stop, step){
  let result = [start];
  if(start < stop && step > 0 && start !== null && stop !== null && step !== null) {
    for (let i = start; i < stop; i += step){
      start = start + step;
      result.push(start);
    }
    return result;
  } else {return [];}
}

console.log(range(-5,2,3));



start = 5

stop = 3

step =1

function range(start, stop, step){
  let result = [];
  if (start === undefined || stop === undefined  || step === undefined || step < 1){
    return result;
  }

  for (let i = start; i <= stop ; i = i + step){
    result.push(i);
  }
  return result;
}

console.log(range(-5,2,3));

console.log(range(-5,-10,3));
