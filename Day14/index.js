// // 1. Sum of positives and negatives
// // Input: sebuah array of numbers
// // Output : sebuah array -> [ <sum_of_positives>, <sum_of_negatives> ]
// // [1, 3, -4, 2, -13, -7][(6, -24)]; // input // output

// let numbers = [1, -28, 19, -20, -15, 17, 2];

// const sumOfPositivesAndNegatives = (arr = []) => {
//   let positives = 0;
//   let negatives = 0;

//   arr.forEach((val) => {
//     if (val > 0) {
//       positives += val;
//     } else if (val < 0) {
//       negatives += val;
//     }
//   });

//   return [positives, negatives];
// };
// console.log(sumOfPositivesAndNegatives(numbers));

// // 2.Square All
// // Input: sebuah array of numbers
// // Output: array of numbers yang sama, tapi sudah dipangkat 2
// // [1,2,3,4,5]
// // [1,4,9,16,25]

// let numbero = [1, 2, 3, 4, 5];

// const squareAll = (arr = []) => {
//   let resultArr = [];

//   arr.forEach((val) => {
//     resultArr.push(val * val);
//   });
//   return resultArr;
// };
// console.log(squareAll(numbero));

// // let resultArr = arr.map((val) => { //methode map akan selalu return sebuah array dan hasil dari returnnya akan di push ke array tsb
// //     return val * val
// // })

// // return resultArr

// // 3. Plus Minus
// // Input: sebuah array of numbers
// // Output: single number
// // [1,2,3,4,5]
// // [8]

// let numero = [1, 2, 3, 4, 5];

// const minusPlus = (arr = []) => {
//   let result = 0;
//   let operator = "plus";

//   arr.forEach((val) => {
//     if (operator == "plus") {
//       result += val;
//       operator = "minus";
//     } else if (operator == "minus") {
//       result -= val;
//       operator = "plus";
//     }
//   });
//   return result;
// };
// console.log(minusPlus(numero));

// 4. Remove vowels
// Input : "hello"
// Output : "hll"

// let words = "Hello World";
// const splitWords = words.split("")
// let hasil = splitWords[1]

// console.log(hasil)

// const noVocal = (string) => {
//   let vocal = ["a", "i", "u", "e", "o"];
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (!vocal.includes(string[i])) {
//       result += string[i];
//     }
//   }
//   return result;
// };
// console.log(noVocal("anjaygurinjay"));

// console.log(alphabet);

const alphabetToNumber = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = 0;
  for (let i = 0; i < string.split("").length; i++) {
    result += alphabet.indexOf(string[i]) +1
  }
  return result;
};
console.log(alphabetToNumber("abc"))