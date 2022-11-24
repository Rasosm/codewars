// Write a function "greet" that returns "hello world!"
//
// function reverseString(str) {
// let ats = '';
// for (let i = str.length - 1; i >= 0; i = i - 1) {
//   const symbol = str[i];
//   ats += symbol;
// }
// return ats;
// }

// console.log(reverseString('abcdef'));
//
// Hello, <name> how are you doing today?
// function greet(name){
//   const resultStr = `Hello ${name} how are you doing today?`;
//   return resultStr;
// }
// console.log(greet("Rasa"));
//
// function removeChar(str) {
//  let Str1 = ''
//     for(let i = 1; i < str.length - 1; i = i + 1) {
//         Str1 += str[i]
//     }
//     return Str1
// }
//  console.log(removeChar("Saule"));

// function removeChar(str){
//   return str.substring(1, str.length-1);
//  };
//  console.log(removeChar("Saule"));

// const removeChar = str => str.slice(1,-1)
// console.log(removeChar("Saule"));

// function removeChar(str) {
//   return str.slice(1, -1);
// }
// console.log(removeChar("Saule"));

// //
// function doubleChar(str) {
//   let doubleLetter = '';
//   for (let i = 0; i < str.length; i++) {
//     doubleLetter += str[i] + str[i];
//   }
//   // }
//   return doubleLetter;// return ats;// Your code here
// }
// // console.log(doubleChar(Srting));

// function greet (name, owner) {
//   if (name == owner){
//     return 'Hello boss';
//   } else {
//     return 'Hello guest';
//   }
//   }

//   function greet (name, owner) {
//     return name === owner ? 'Hello boss' :  'Hello guest';
//   }

// function makeUpperCase(str) {
//   return str.toUpperCase('');
// }

// function greet(name) {
//   return "Hello, " + name + "!";

//   if(name === "Johnny") {
//     return "Hello, my love!";
// }
// }

// function getGrade (s1, s2, s3) {
//   const aveGrade = (s1 + s2 + s3) / 3;
//   if (90 <= aveGrade && aveGrade <= 100) {
//     return 'A';
//     }
//   if (80 <= aveGrade && aveGrade < 100) {
//         return 'B';
//     }
//   if (70 <= aveGrade && aveGrade < 80) {
//         return 'C';
//     }
//   if (60 <= aveGrade && aveGrade < 70) {
//         return 'D';
//     }
//   if (0 <= aveGrade && aveGrade < 60) {
//         return 'F';
//     }
// }
// function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }

// function paperwork(n, m) {
//   if (m < 0 || n < 0) {
//     return 0;
//   }
//   return m * n;
// }
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }
// function findAverage(array) {
//   if (array.length === 0) {
//   return 0;
//     } else {
//       let sumFor = 0;
//       for (let i = 0; i < array.length; ++i) {
//         sumFor += array[i];
//       }

//       return sumFor / array.length;
//     }
// }
// function find_average(arr) {
//   return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
// }
// function abbrevName(name) {
//   return name.split(" ").map(el => el[0].toUpperCase()).join(".")
// }
// console.log(abbrevName('Nojus Kvedra'));
// gausis N.K
//
// function digitize(n) {
//   return n.toString().split('').reverse().map(Number);
// }
// console.log(digitize(2, 3, 4, 6));

// function hoopCount(n) {
//   return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
// }

// function repeatStr(n, s) {
//   if (n > 0) {
//     return s.repeat(n);
//   } else {
//     return "";
//   }
// }

// function stringToArray(string) {
//   return string.split(" ");

// }

// function numberToString(num) {
//   return num.toString();
// }
// function smash(words) {
//   return words.join(" ");
// };
// const stringToNumber = function (str) {
//   return parseFloat(str);
// }

// function removeExclamationMarks(s) {
//   return s.replace(/!+$/, '');
// }

// function areYouPlayingBanjo(name) {
//   if (name[0] == 'r' || name[0] == 'R') {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }

// }

// function switchItUp(number) {
//   var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//   return words[number];
// }

// function switchItUp(n) {
//   return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]
// }

// function findShort(s) {
//   let arr = s.split(" ").sort((a, b) => a.length - b.length);
//   return arr[0].length;
// }

// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// strCount('ssup', 's');  // 2
// strCount('ssup', 'u');  // 1
// strCount('ssup', 'a');  // 0


// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, "U");
// }

// function remove(string) {
//   if (string[string.length - 1] === "!") {
//     return string.slice(0, string.length - 1);
//   } else {
//     return string;
//   }
// }

// let getMax = function (str) {
//   const number = '338143541012587690953963229531676155968368623409571396164529725919094651568441655040727279902581731469359614862433951046700639416548444916152903821351486231'
//   let max = 0,
//     maxChar = '';
//   str.split('').forEach(function (char) {
//     if (str.split(char).length + 1 > max) {
//       max = str.split(char).length;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// // };
// const pasikartojimai = new Array(100).fill(0);
// const input = '338143541012587690953963229531676155968368623409571396164529725919094651568441655040727279902581731469359614862433951046700639416548444916152903821351486231';
// const pasikartojimai = [];
// for (let i = 0; i < input.length - 1; ++i) {
//   const number = input[i] + input[i + 1];
//   pasikartojimai[+number]++;
// }
// let
// console.log(pasikartojimai);

function removeExclamationMarks(s) {

  return s.split('!').join('');
};
console.log(removeExclamationMarks('Hello World!'));

function correct(string) {
  return string.replace('1', 'I').replace('0', 'O').replace('5', 'S').replace('0', 'O')

}