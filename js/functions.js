// 1.
function text(n) {
    return n;
}

console.log(text('labas'));

// 2.
function hi(say, n) {
    return say.repeat(n);
}
console.log(hi('labas ', 5));

// 4.

function integer(num) {
    let daliklis = 0;
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            daliklis++;
        }
    }
    return daliklis;
}

console.log(integer(8));

// 5. 
let masyvas1 = [];

for (let i = 0; i < 100; i++) {
    masyvas1.push(Math.floor(Math.random() * (77 - 33 + 1) + 33));
}

console.log(masyvas1);

let masyvas2 = [];
for (let i = 0; i < masyvas1.length; ++i) {
    masyvas2.push(integer(masyvas1[i]));
}
masyvas2.sort((a, b) => b - a);

console.log(masyvas2);

// 6.

let masyvas3 = [];

for (let i = 0; i < 100; i++) {
    masyvas3.push(Math.floor(Math.random() * (777 - 333 + 1) + 333));
}
console.log(masyvas3);
let masyvas4 = []
for (let i = 0; i < masyvas3.length; ++i) {
    masyvas4.push(integer(masyvas3[i]));
}

console.log(masyvas4);
let masyvas5 = masyvas4.filter(item => item > 0);
console.log(masyvas5);

// 7.