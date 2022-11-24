// 1.
const num1 = Math.floor(Math.random() * (25 - 5 + 1) + 5);
const num2 = Math.floor(Math.random() * (25 - 5 + 1) + 5);
const num3 = Math.floor(Math.random() * (25 - 5 + 1) + 5);

console.log(num1, num2, num3);


// A.
const sum = num1 + num2 + num3;
console.log(sum);
// B.
const sumString = sum.toString();

console.log(sumString);
console.log(typeof sumString);
console.log(typeof sum);
// C.

const allString = `${num1} ${num2} ${num3} ${sum}`;

console.log(allString);

// 2.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(5, 10));

console.log(`---------------------------`);

// 1.
let numbers = [];
for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * (25 - 5)) + 5;
    numbers.push(num);

}
console.log(numbers);
// A.
let numbersSum = 0;
for (let i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
}
console.log(numbersSum);
// B.
const numbersSumString = numbersSum.toString();
console.log(numbersSumString);
console.log(typeof numbersSumString);

// C.
let allNumbersString = [...numbers, numbersSum];
allNumbersString.toString();
console.log(allNumbersString);
// 2.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(5, 10));
// 3.

for (let i = 0; i = 5; ++i) {
    text += 'labas';
}
console.log(text);