// function generateOtp() {
//     // generate 4 digit otp
//     let otp = "";
//     for (let i = 0; i < 4; i++){
//         otp += Math.floor(Math.random() * 10);
//     }

//     return otp;
// }

// let arr = ["hello", 34, true];
// for (let value of arr) {
//     console.log(value);
// }

// console.log(generateOtp()); 

// // random hex color
// function hex() {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += Math.floor(Math.random() * 16).toString(16);
//     }
//     return color;
// }
// console.log(hex());


// // arrow function
// let add = (a, b) => a + b;
// console.log(add(3, 5));

// // function expression
// function add(a, b) {
//     return a + b;
// }

// // callback function : accepts another function as parameter 
// function caculate(a, b, fun) {
//     console.log(fun(a, b));
// }

// let sum = calculate(3, 5, (a, b) => {
//     return a + b;
// })

// caculate(5, 8, add);

// let nums = [3, 2, 5, 1, 5, 6, 2, 9];

// let fun = (x) => {
//     return x * 2;
// }
// let result = nums.map(fun);
// console.log(result);



// let res = nums.filter((x) => {
//     return x % 2 == 0;
// });

// console.log(res);

let fruits = ['apple', 'banana', 'grapes', 'mango', 'apple'];

// 1. remove all apples
let filtered = fruits.filter((x) => {
    return x.toLowerCase() != 'apple';
})
console.log(filtered);

let resultant = fruits.filter((value, idx, fruits) => {
    console.log(idx);
    let ele = value.toLowerCase();
    return ele != 'apple';
})

// fliter the age > 18
let age = [64, 12, 16, 18, 90, 87]
let mature = age.filter((x) => {
    return x > 18;
})

console.log(mature);

let fucks = ['apple', '']