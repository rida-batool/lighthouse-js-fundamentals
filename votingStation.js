const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

let chooseStations = function(stations){
  let goodStations = [];
   for (let station of stations){
    var capacity = station[1];
    
    if (capacity >= 20){
      var type = station[2];
      if(type === "school" || type === "community centre"){
        goodStations.push(station[0]);
      }
    }
   }
   return goodStations;
}

console.log(chooseStations(stations));