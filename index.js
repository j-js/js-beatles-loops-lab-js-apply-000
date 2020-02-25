// add solution here

function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for(var i=0; i<musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return plays;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];
  while(i < facts.length ){
   newFacts.push(`$(facts[i])!!!`);
   i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  
}
