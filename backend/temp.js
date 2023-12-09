// let p = 'polikujmnhytgbvfredcxswqaz';
// let s = 'abcd';

// function lex(text) {
//     const items = [];
//     for (let i = 0; i < text.length; i++) {
//         items.push({ [text[i]]: p.indexOf(text[i]) });
//     }
//     items.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);
//     return items;
// }

// console.log(lex(s));

let N = 1000

function isPrime(number) {
    // Check for special cases: 0, 1, and negative numbers are not prime
    if (number <= 1) {
        return false;
    }

    // Check for divisibility by numbers from 2 to the square root of the given number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If the number is divisible by any number in this range, it's not prime
            return false;
        }
    }

    // If the number is not divisible by any number in the range, it's prime
    return true;
}

function cal(N) {
    let primeArr = []
    let count = 0

    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
    }

    if (primeArr.length <= 2) return "Not Possible"

    for (let i = 1; i < primeArr.length; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += primeArr[j];
        }

        if (isPrime(sum)) count += 1
    }

    return count
}

console.log(cal(N))