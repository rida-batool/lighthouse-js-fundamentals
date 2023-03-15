const moves = ['north', 'north', 'west', 'west', 'north', 'east','south']  


const finalPosition = function(moves){

  let starting = [0,0];
    for (let move of moves){
      if (move === "north"){
        starting[1] += 1;
      } else if(move === "south"){
        starting[1] -= 1;
      } else if(move === "west"){
        starting[0] -= 1;
      } else if (move === "east"){
        starting[0] += 1;
      }
    }
    return starting;
}

console.log(finalPosition(moves));