// TEST Abbon with Node.js by Mr.Ratthapong Junpoung
// 1.Reverse Integer
let reverseNumber = n => {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
console.log(reverseNumber(123));
console.log(reverseNumber(-321));
console.log(reverseNumber(120));

// 2.Fibonacci
let fibonacci = n => {
    let fib = [1, 1]; 
    while (fib[fib.length - 1] + fib[fib.length - 2] <= n){
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);  
    }
    return fib;
}
console.log(fibonacci(15));
console.log(fibonacci(8));

// 3.Prime Number
let getPrime = n => {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        let isPrime = true;
        for (const prime of primes){
            if(num % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        num += 1;
    }
    return primes;
}
console.log(getPrime(3));
console.log(getPrime(8));

// 4.Merge 2 Sorted List
let mergeSortedArrays = (array1, array2) => {
    const allArray = array1.concat(array2);
    const sortedarray = allArray.sort((a, b) => a - b);
    return sortedarray;
}
console.log(mergeSortedArrays(array1=[1, 2, 4], array2=[1, 3, 4,]));
console.log(mergeSortedArrays(array1=[], array2=[]));
console.log(mergeSortedArrays(array1=[], array2=[0]));

// 5.Duplicate Char
let duplicate = (string) => {
    let charCount = {};
    for (let char of string) {
        charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0) + 1;
    }

    let count = 0;
    for (let char in charCount) {
        if(charCount[char] > 1) {
            count += 1;
        }
    }
    return count;
}
console.log(duplicate("abcde"));
console.log(duplicate("aabbcde"));
console.log(duplicate("aabBcde"));
console.log(duplicate("indivisibility"));
console.log(duplicate("Indivisibilities"));
console.log(duplicate("aA11"));
console.log(duplicate("ABBA"));

// 6.Integer to Roman
let toRoman = n => { 
    if(n < 1 || n > 3999) return "";
    const roman = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    let result = "";
    for (const [value, letter] of Object.entries(roman).sort((a, b) => b[0] - a[0])) {
        while (n >= value) {
            result += letter;
             n -= value;
        }
    }
    return result;
}
console.log(toRoman(3));
console.log(toRoman(58));
console.log(toRoman(1994));

// 7.Valid Bracket
let isSort = str => {
    const stack = [];
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    for (const char of str) {
        if (char in pairs) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if ( char !== pairs[last] ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isSort("(){}[]"));
console.log(isSort("([{}])"));
console.log(isSort("(}"));
console.log(isSort("[(])"));
console.log(isSort("[({})](]"));

// 8.Longest Valid Bracket
let countBrackets = str => {
    let maxLength = 0;
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i);
        } else if (str[i] ===')') {
            if (stack.length > 0) {
                stack.pop();
                let start = stack.length > 0 ? stack[stack.length - 1] : -1;
                maxLength = Math.max(maxLength, i - start);
            } else {
                stack.push(i);
            }
        }
    }
    return maxLength;
}
console.log(countBrackets('(()'));
console.log(countBrackets(')()()'));
console.log(countBrackets(''));
  


  
  


