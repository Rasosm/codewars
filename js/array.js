// 1.
let wallet = [];
const a = Math.floor(Math.random() * (30 - 10) + 10);
for (i = 0; i < a; i++) {
    wallet.push(Math.floor(Math.random() * 11));
}
console.log(wallet);

// // 2.

function sum() {
    let sum = 0;
    for (let i = 0; i < wallet.length; ++i) {
        sum += wallet[i];
    }
    return sum;
}
console.log(sum());

// // // 3.
let sumHigh = 0;
for (let i = 0; i < wallet.length; ++i) {
    if (wallet[i] > 2) {
        sumHigh += wallet[i];
    }
}
console.log(sumHigh);

// // // 4.
// //
function change(wallet) {
    for (let i = 0; i < wallet.length; ++i) {
        if (wallet[i] <= 2) {
            wallet[i] = 0;
        }
    }
    return wallet;
}
console.log(change(wallet));

// // // 5. surasti didziausia skaiciu ir paskaiciuoti kiek tokiu yra masyve
// // // let arr = [4, 6, 7, 10, 10, 8, 9, 9, 8, 2, 7, 10, 2, 2, 3, 10, 11, 5, 10, 9];
// // // function max(num) {
// // //     for (let i = 0; i < num.length; ++i) {
// // //         num.sort(function (a, b) { return b - a });
// // //     }
// // //     return num[0];
// // // }
// // // console.log(max(arr));

// // // /

// wallet.sort((a, b) => b - a);

// console.log(wallet);

const max = Math.max(...wallet);

console.log(max);



let how = 0;
for (let i = 0; i < wallet.length; ++i) {
    if (max === wallet[i]) {
        how = how + 1;
    }
}
console.log(how);

// 6.
let newWallet = [...wallet];
for (i = 0; i < wallet.length; ++i) {
    if (newWallet[i] === 0) {
        newWallet[i] = i;
    }
}
console.log(newWallet)
// 7.
// // 8.

// let wallet = [];
// const a = Math.floor(Math.random() * (30 - 10) + 10);
// for (i = 0; i < a; i++) {
//     wallet.push(Math.floor(Math.random() * 11));
// }
// console.log(wallet);

// let newWallet1 = [...wallet];
// let newWallet2 = [...wallet];
// for (i = 0; i < wallet.length; ++i) {
//     if (newWallet1[i] <= 2) {
//         newWallet1[i];

//     } else if (newWallet2[i] > 2) {
//         newWallet2;
//     }

// }

let walletSmall = wallet.filter(item => item <= 2);
let walletBig = wallet.filter(item => item > 2);

console.log(walletSmall, walletBig);

// 9. 
const oneWallet = [walletSmall, walletBig];

console.log(walletSmall, walletBig);
// 10.
const mixWallet = [...oneWallet, ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']];
console.log(mixWallet);
// let cards = ['KIKA', 'Euro Vaistinë', 'Drogas', 'Aèiû', 'Lietuvos Geleþinkeliai', 'Mano RIMI'];
// bigPurse.push(cards)

// 11.
// mixWallet[2].sort();
// console.log(mixWallet);

// // 12.
// mix