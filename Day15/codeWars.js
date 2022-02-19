// const isDivisible = (n, x, y) => {
//  let hasil
//   if (n < 0 || x < 0 || y < 0) {
//     return;
//   } else if (n % x == 0 && n % y == 0) {
//     return (hasil = true);
//   } else if (n % x != 0 && n % y != 0) {
//     return (hasil = false);
//   }
// };

// console.log(isDivisible(4, 1, 2));

// const ever_or_odd = (n) => {
//     if (n % 2 == 0) {
//       return "Even"
//     } else if (!(n % 2 == 0)){
//       return "Odd"
//     }
//   }
//   console.log(ever_or_odd(0))

// const well = (arr = []) => {
//   let hasil;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "good") {
//       return (hasil = "Publish!");
//     } else if (arr[i] == "bad") {
//       return (hasil = "Fail!");
//     }
//   }
// };

// const removeChar = (string) => {
//   let stringArr = string.split("");

//   stringArr.splice(0, 1);
//   stringArr.splice(stringArr.length - 1, 1);
//   return stringArr.join("");
// };
// console.log(removeChar("Ahuy"));

// const remove = (string) => {
//   let stringArr = string.split("");
//   if (stringArr[stringArr.length - 1] == "!") {
//     stringArr.splice(stringArr.length - 1, 1);
//   }
//   return stringArr.join("");
// };
// console.log(remove("Hi!"));

// const remove = (string) => {
//   let stringArr = string.split("");
//   let hasil = [];
//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i] !== "!") {
//       hasil.push(stringArr[i]);
//     }
//     hasil.length += "!"
//     hasil.join("");
//   }
//   return hasil;
// };
// console.log(remove("Hi!"));

// const countPositivesSumNegatives = (arr = []) => {
//   let positive = [];
//   let negative = 0;
//   let hasil = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positive.push(arr[i]);
//     } else if (arr[i] < 0) {
//       negative += arr[i];
//     }
//   }
//   return (hasil = [positive.length, negative]);
// };
// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(test));

// const solution = (string) => {
//     let stringArr = string.split("")
//     let reverseArr = stringArr.reverse()
//     let reversed = reverseArr.join("")
//     return reversed
//   }

//   console.log(solution("Hello"))

// const digitize = (numb) => {
//     let string = String(numb)
//     let splitArr = string.split("")
//     let reversed = splitArr.reverse()
//     let hasil = reversed.map(Number)
//     return hasil
// }
//   console.log(digitize(1234))

// const fakeBin = (string) => {
//   let stringArr = string.split("");
//   let stringToNumb = stringArr.map(Number);
//   let hasil = []
//   for (let i = 0; i < stringToNumb.length; i++) {
//       if (stringToNumb[i] < 5) {
//           hasil.push (0)
//       } else if (stringToNumb[i] >= 5) {
//           hasil.push (1)
//       }
//   }
//   return hasil.join("")
  
// };
// console.log(fakeBin("123456"));
