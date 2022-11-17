// function maps(x){
//   let newMap = [];
//       for(let i = 0; i < x.length; i++){
//           newMap.push(x[i] * 2);
//       }
//       return newMap;
//   }

//   function maps(x){
//     return x.map(n => n * 2);
//   }


//   var min = function(list){
//     list.sort(function(a, b){return a - b});
//     return list[0];
// }

// var max = function(list){
//     list.sort(function(a, b){return b - a});
//     return list[0];
// }

function position(letter) {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const letterLowercase = letter.toLowerCase();
  const position = letters.indexOf(letterLowercase) + 1;
  return `Position of alphabet: ${position}`;
}

function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}