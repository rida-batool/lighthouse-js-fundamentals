const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

const judgeVegetable = function (vegetables, metric) {
  let valueMetric = 0;
  let vegiSubmitter;
  for (let vegetable of vegetables){
    if(valueMetric < vegetable[metric]){
      valueMetric = vegetable[metric];
      vegiSubmitter = vegetable["submitter"];
    }
  }
  return vegiSubmitter;
}

console.log(judgeVegetable(vegetables, metric));
