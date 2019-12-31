function dwarfRollCall(dwarves) {
  let myString = "";
  for (let i=0; i < dwarves.length; i++) {
    // String will begin at 1
    let j = i+1;
    myString += j + ". " + dwarves[i] + " ";
  }
  return myString;
}

function summonCaptainPlanet(planeteerCalls){
  let myArray = [];
  for (let i=0; i < planeteerCalls.length; i++) {
    // taking elements from the array, making uppercase, adding excalimation point in a string
    let myString = planeteerCalls[i].toUpperCase() + "!";
    myArray.push(myString);
  }
  return myArray;
  
  // return planeteerCalls.map(function (i) {return i.toUpperCase() + "!"});
  
}

function longPlaneteerCalls(words) {
  // for (let i=0; i <= words.length; i++) {
  //   if (words[i].length <= 4) { 
  //     continue;
  //   }
  //   else {
  //     return false;
  //   }
  // } 
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  
  let cheese = ["cheddar", "gouda", "camembert"];
  
  for (let i=0; i < foods.length; i++) {
    // for (let j=0; j < cheese.length; j++) {
    //   if (foods[j] === cheese[i]) {
      cheese.indexOf(foods[i])
        let cheeseIndex = cheese.indexOf(foods[i])
        if (cheeseIndex > -1) {
          return foods[i]
        }
    //   } 
    // }
  }
  
  return "no cheese!"
}

// return a new array with all words from first array that start with B 
function wordsThatStartWithB (words) {
  let myArr = [];
  for (let i=0; i < words.length; i++) {
    if (words[i].startsWith('B')){
      myArr.push(words[i])
    }
  }
  return myArr
}

