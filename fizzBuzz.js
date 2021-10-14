// Write a program that counts from 1 to 50 in fizzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

// For example:

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz
console.log("FizzBuzzChallenge");
let divBy3 = "Fizz";
let divBy5 = "Buzz";

for(let i = 0; i < 50; i++) {
    if(i % 5 === 0) {
        console.log(divBy5);
    } else if(i % 3 === 0) {
        console.log(divBy3);
    } else if(i % 15 === 0) {
        console.log(divBy3divBy5);
    } else {
        console.log(i);
    };
};


// Jeddy solution
// for(i = 1; i <= 50; i++) {
//     if(i % 15 === 0){
//       console.log("Fizz Buzz")
//     }else if(i % 3 === 0){
//       console.log("Fizz")
//     }else if(i % 5 === 0){
//       console.log("Buzz")
//     }else {
//       console.log(i)
//     }
//   }