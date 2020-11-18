// 1.1 Write a function that finds and removes instances of four identical consecutive lowercase letters.

let text = "ffffdttttyyccxxxxpaaaa";
let res = removeLetters(text);
function removeLetters(str) {
    for (let i = 0; i < str.length; i++){
        if(str[i] === str[i+3]) str = str.slice(0, i) + str.slice(i, i+3) + str.slice(i+4);
    }
    return str;            
}

const result = (str) => {
    for (let i = 0; i < str.length; i++){
        if(str[i] === str[i+3]) str = str.slice(0, i) + str.slice(i, i+3) + str.slice(i+4);
    }
    return str;   
}

// 1.2 Write a function that takes an array of numbers and returns the maximum sum of two numbers whose digits have an odd sum.

let numbers =  [19, 2, 42, 18, 17, 21, 449879, 1499999, 148392]
let numbers2 = [19, 2, 42, 18];
let numbers3 = [61, 32, 51];

function sum(numbArr) {
    let highOdd = Math.max(...numbArr.filter(n => n & 1));
    let highEven = Math.max(...numbArr.filter(n => !(n & 1)));
    let sum = highOdd + highEven;
    return sum;
}

// The common solution to determining if a number is odd/even is to use the modulus operator.
// You can attain the same result by using the bitwise operator & (AND) which works faster than the modulus operator.












