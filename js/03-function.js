// Write a function "greet" that returns "hello world!"
// function greet() {
//   return '"hello world!".';
// }


// console.log(greet());

// function grow(x){
//   const x = [1, 2, 3, 4]
//   return `[0];`
// }
// console.log(x);

// const letters = 'abcdef';
// for (let i = letters.length - 1; i >= 0; i = i - 1) {

// const symbol = letters[i];
// console.log(symbol);
// }

// const start = [0, 0, 0, 574, -50, -70];
// const end = [0, 4, 100, 815, 50, 30];

// for (let i = 0; i < end.length; i = i + 1) {
//   // sumaIntervale(start[i], end[i]);
//   // return start[i];
// }
// console.log[end.length];

// function bmi(weight, height) {
//   let bmi = (weight) / (height * height);

//     if (bmi <= 18.5) {
//         return "Underweight";
//     }

//     else if (bmi <= 25.0) {
//         return "Normal";
//     }

//     else if (bmi <= 30.0) {
//         return "Overweight";
//     }

//     else if (bmi > 30.0) {
//         return "Obese";
//     }

//   }
// console.log(bmi(80, 1.78));

// apskaiciuoti bmi(weight, height)
// const weight = 100;
// const height = 1.78;
// const bmi = ((weight) / (height * height));

//   if (bmi <= 18.5) {
//       console.log("Underweight");
//   }

//   else if (bmi <= 25.0) {
//       console.log("Normal");
//   }

//   else if (bmi <= 30.0) {
//       console.log("Overweight");
//   }

//   else if (bmi > 30.0) {
//       console.log("Obese");
//   }
// console.log(bmi);

// function bmi(weight, height) {

//   var bmi  = weight / (height * height);

//    return bmi <= 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

//   }
//   console.log(bmi(63, 1.78));

//  function positiveSum(arr) {
//    let sum = 0;
//      for(let i = 0; i < arr.length; ++i) {
//         if(arr[i] > 0) {
//           sum += arr[i]
//      }
//     }
//       return sum
//   }
//  console.log(positiveSum([1,-4,7,12]));

//
// function check(a,x){
//   return a.includes(x);
// };
// function countSheeps(arrayOfSheep) {

//   return arrayOfSheep.filter(item => item === true).length
//   }

//

// function reverseWords(str) {
//   let ats = '';
//   for (let i = str.length - 1; i >= 0; --i) {
//     const symbol = str[i];
//     ats += symbol;

//   }
//    return ats;
// }
// console.log(reverseWords('This is an example!'));

// function even_or_odd(number) {
//   if (number % 2 === 0) {
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// }

// function squareSum(numbers){
//   let total = 0;
//    for (i = 0; i < numbers.length; ++i) {
//      total = total + (numbers[i] * numbers[i]);

//    }
//    return total;
//  }
//
// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }
// function addExtra( listOfNumbers ){
//   return [...listOfNumbers, ''];
// var number = function (array) {
//   if (array.length == 0) {
//     return [];
//   } else {
//     return array.map(function (item, idx) {
//       return (idx + 1) + ": " + item;
//     });
//   }

// }
// var number = function (arr) {
//   var newArr = [];
//   if (arr.length === 0) {
//     return [];
//   } else {
//     for (var i = 0, len = arr.length; i < len; i += 1) {
//       newArr.push((i + 1) + ': ' + arr[i]);
//     }
//   }
//   return newArr;
// }
// function number(array) {
//   return array.map(function (line, i) {
//     return String(i + 1) + ": " + line
//   })
// }

// function rentalCarCost(d) {
//   let car = d * 40;
//   if (d >= 7) {
//     return car -= 50;
//   }
//   if (d >= 3) {
//     return car -= 20;
//   } if (d < 3) {
//     return car;
//   }
// }

// var humanYearsCatYearsDogYears = function (humanYears) {

//   let CatYears = humanYears * 4;
//   let DogYears = humanYears * 5;
//   if (humanYears == 1) {
//     return [humanYears, CatYears + 11, DogYears + 10];
//   }
//   if (humanYears == 2) {
//     return [humanYears, CatYears + 16, DogYears + 14];
//   }
//   if (humanYears >= 3) {
//     return [humanYears, CatYears + 16, DogYears + 14];
//   }

//   var humanYearsCatYearsDogYears = function (y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
//   }

//   const humanYearsCatYearsDogYears = (humanYears) => {
//     let catYears = 0;
//     let dogYears = 0;

//     for (let i = 1; i <= humanYears; i++) {
//       if (i === 1) {
//         catYears += 15;
//         dogYears += 15;
//       }
//       else if (i === 2) {
//         catYears += 9;
//         dogYears += 9;
//       }
//       else {
//         catYears += 4;
//         dogYears += 5;
//       }
//     }
//     return [humanYears, catYears, dogYears];
//   }

//   class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)

//     }
//   }

//   function grow(x) {
//     let multi = 1;
//     for (i = 0; i < x.length; ++i) {
//       multi = multi * x[i];
//     }
//     return multi;
//   }
//   function strCount(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }

//   const reverseSeq = n => {
//     let arr = [];
//     for (i = 0; i < n; i++) {
//       num = n - i;
//       arr.push(num);

//     }

//     return arr;

//   }
//   const reverseSeq = n => {
//     let answer = [];          //intialize an array

//     for (let i = n; i > 0; i--) {  //loop down from n to 1
//       answer.push(i);         //push each i to the answer array
//     }

//     return answer;            //return answer;
//   };

//   function sameCase(a, b) {
//     if ((a.match(/[A-Z]/g) && b.match(/[a-z]/g)) || (a.match(/[a-z]/g) && b.match(/[A-Z]/g))) {
//       return 0;
//     } else if ((a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) || (a.match(/[a-z]/g) && b.match(/[a-z]/g))) {
//       return 1;
//     } else {
//       return -1;
//     }


//   }
//   function sameCase(a, b) {
//     if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
//       return -1
//     } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
//       return 1
//     } else {
//       return 0
//     }
//   }

//   function oddOrEven(array) {
//     return array.reduce(function (sum, item) {
//       return sum + item
//     }, 0) % 2 == 0 ? 'even' : 'odd';
//   }
//   var countSheep = function (num) {
//     let sheepNum = "";
//     for (let i = 1; i <= num; i++) {
//       sheepNum += `${i} sheep...`;
//     }
//     return sheepNum;
//   }

//   function findNeedle(haystack) {
//     for (i = 0; i < haystack.length; ++i) {
//       if (haystack[i] === 'needle') {
//         return 'found the needle at position ' + [i];
//       }

//     }

//   }
//   function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
//   }

// function century(year) {
//   let centuryCount = 0;
//   while (year > 0) {
//     year = year - 100;
//     centuryCount = centuryCount + 1;
//   }
//   return centuryCount;
// }

// function numberToPower(number, power) {
//   let sum = 1;
//   for (let i = 0; i < power; ++i) {
//     sum *= number;
//   }
//   return sum;
// }
// console.log(numberToPower(2, 3));


// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) { return a - b; });
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }
// function sumTwoSmallestNumbers(numbers) {
//   let ats = 0;
//   numbers = numbers.sort(function (a, b) { return a - b });
//   for (let i = 0; i <= 1; i++) {
//     ats = ats + numbers[i];
//   }
//   return ats;
// }

// var isSquare = function (n) {
//   if (n < 0) { return false }
//   else if (n === 0) { return true }
//   else if ((n ** 0.5) % 1 === 0) { return true }
//   else { return false }
// }
// console.log(isSquare(25));

// function createPhoneNumber(numbers) {
//   let str = ''
//   for (let i = 0; i < numbers.length; i++) {
//     str = str + numbers[i]
//   }
//   return (`(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`)

// }
// const numbers = [1, 3, 7, 0, 4, 7, 2, 1, 8, 9];

// console.log(createPhoneNumber(numbers))
// function fakeBin(x) {
//   let str = '';
//   for (let i = 0; i < x.length; ++i) {

//     if (x[i] < 5) {
//       str = str + 0;
//     } else {
//       str = str + 1;
//     }
//   }
//   return str;
// }

// function fakeBin(x) {
//   let str = '';
//   for (let i = 0; i < x.length; ++i) {

//     if (x[i] < 5) {
//       str = str + 0;
//     } else {
//       str = str + 1;
//     }
//   }
//   return str;
// }

// function betterThanAverage(classPoints, yourPoints) {
//   const classAverage = classPoints / classPoints.length;
//   const yourAverage = yourPoints / yourPoints.length;
//   if
// }

// console.log(betterThanAverage(6, 8));

// function betterThanAverage(classPoints, yourPoints) {
//   const sumReduce = classPoints.reduce(function (total, n) {
//     return total + n;
//   });
//   const classAverage = (sumReduce + yourPoints) / (classPoints.length + 1);

//   if (classAverage > yourPoints) {
//     return false;
//   } else {
//     return true;
//   }
//   function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     var classAvg = 0;
//     for (var i = 0; i < classPoints.length; i++) {
//       classAvg += classPoints[i];
//     }
//     classAvg = classAvg / classPoints.length;
//     return yourPoints > classAvg;
//   }
// function digitize(n) {
//   return n.toString().split('').reverse().map(Number);
// }
// console.log(digitize(2, 3, 4, 6));

// function numbers(str) {
//   let doubleLetter = '';
//   for (let i = 0; i < str.length; i++) {
//     doubleLetter += str[i];
//   }
//   return str;
// }


// console.log(str('338143541012587690953963229531676155968368623409571396164529725919094651568441655040727279902581731469359614862433951046700639416548444916152903821351486231'));

// function points(games) {
//   let sum = [];
//   for (let i = 0; i < games.length; ++i) {

//     if (games[i][0] > (games[i][2])) {
//       sum.unshift(3);

//     } else if (games[i][0] == (games[i][2])) {
//       sum.unshift(1);
//     } else if (games[i][0] < (games[i][2])) {
//       sum.unshift(0);
//     }


//   }
//   return sum;

// };

// console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "10:3", "1:4", "2:3", "2:4", "3:4"]), 0);
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "35:1", "4:1", "3:2", "4:2", "4:3"]), 30);
// console.log(points(["1:0", "2:0", "3:0", "4:0", "27:1", "1:3", "1:4", "2:3", "2:4", "3:4"]), 15);
// console.log(points(["1:0", "2:0", "3:50", "4:4", "2:2", "3:63", "1:4", "2:63", "2:4", "3:4"]), 12);
// function points(games) {
//   let sum = 0;
//   for (let i = 0; i < games.length; ++i) {

//     if (games[i][0] > (games[i][2])) {
//       sum += 3;

//     } else if (games[i][0] == (games[i][2])) {
//       sum += 1;
//     } else if (games[i][0] < (games[i][2])) {
//       sum += 0;
//     }

//   }
//   return sum;

// };

// console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]), 0);
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]), 15);
// console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:63", "1:4", "2:3", "2:4", "3:4"]), 12);
// // let sum = [] duos toki atsakyma , o jei sum = 0
// 0000000000 0
// 3333333333 30
// 3333300000 15
// 3331100000 12
// o jei sum = 0; parasysi, tai duo toki atsakyma
// 0 0
// 30 30
// 15 15
// 11 12

// function sumMix(x) {

//   function sumMix(x) {

//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//       sum = sum + (+x[i]);
//     }
//     return sum;
//   }
// };
// console.log(sumMix([9, 3, '7', '3']), 22);
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);



// function twoHighest(arr) {

//   arr.sort(function (a, b) { return b - a });
//   return `${arr[0]}, ${arr[1]}`;
// }
// console.log(twoHighest([15, 20, 2, 17]), [20, 17]);

// function twoSort(s) {
//   s.sort();
//   return s[0].split("").join("***");



// function random() {

//   let all = [];
//   for (let i = 0; i < 10; ++i) {
//     const numbers = Math.round(Math.random() * 10) + 1;
//     all.push(numbers);
//   }
//   return all;
// }



// console.log(random());

// let number = Math.trunc(Math.random() * 10) + 1;
// console.log(number);

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// const a = [...Array(10)].map(() => getRandomIntInclusive(1, 11));


// console.log(a);


// function randomArray() {
//   let rand = [];
//   for (i = 1; i <= 10; i++) {
//     const x = Math.round(Math.random() * 10) + 1;
//     rand.push(x);
//   }

//   return rand;
// }
//
// console.log(randomArray());

function friend(friends) {
  const result = friends.filter(best => best.length == 4);

  return result;
}

function friend(friends) {
  //your code here
  var realFriends = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].length == 4 && isNaN(friends[i])) {
      realFriends.push(friends[i]);
    }
  }

  return realFriends
}


function removeEveryOther(arr) {
  let ats = [];
  for (let i = 0; i < arr.length; i += 2) {
    ats.push(arr[i]);
  }
  return ats;
}


function invert(array) {

  return array.map(num => {
    return num * -1
  })
}

function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

function nameSuffle(str) {
  return str.split(' ').reverse().join(' ')
}

function filter_list(l) {
  return l.filter(function (n) { return typeof n == 'number' })
}
function filter_list(l) {
  return l.filter(v => typeof v == "number")
}