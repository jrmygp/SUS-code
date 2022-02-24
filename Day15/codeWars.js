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

// const getCount = (string) => {
//     let vowels = ["a","i","u","e","o"]
//     let stringArr = string.split("")
//     let vowelcount = 0

//     for (let i = 0; i < stringArr.length; i ++){
//       if (vowels.includes(stringArr[i])) {
//           vowelcount += 1
//       }
//     }
//     return vowelcount
//   }
//   console.log(getCount("anjaygurinjay"))

// const getMiddle = (string) => {
//   let hasil = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string.length % 2 == 0) {
//       hasil = string.substring(string.length / 2 - 1, string.length / 2 + 1);
//     } else if (!(string.length % 2 == 0)) {
//       hasil = string.substring(string.length / 2, string.length / 2 + 1);
//     }
//   }
//   return hasil;
// };
// console.log(getMiddle("Hello"));

// const removeConsecutiveDuplicates = (string) => {
//   let stringArr = string.split(" ");
//   const removeDuplicate = (val,idx,arr) => {
//       return arr.indexOf(val) == idx
//   }
//   const removed = stringArr.filter(removeDuplicate)
//   const removedJoin = removed.join(" ")
//   return removedJoin
// };
// console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))

// const shortcut = (string) => {
//     let vowels = ["a","i","u","e","o"]
//     let stringArr = string.split("")
//     let hasil = []
//     for (let i = 0; i < stringArr.length; i++) {
//       if (!vowels.includes(stringArr[i])){
//         hasil.push(stringArr[i])
//       }
//     }
//     hasil = hasil.join("")
//     return hasil
//   }
// //   console.log(shortcut("anjaygurinjay"))

// const helloWorld = () => {
// return String.fromCharCode(72,101,108,108,111,44,32,87,111,114,108,100,33)
// from HTML ASCII Reference
// }
// console.log(helloWorld())

// const squareDigits = (numb) => {
//   let numbToString = String(numb);
//   let numbArr = numbToString.split("")
//   let splittedNumber = numbArr.map(Number)
//   let hasil = []

//   for (let i = 0; i < splittedNumber.length; i ++) {
//     hasil.push(splittedNumber[i]*splittedNumber[i])
//   }
//   hasil = hasil.join("")
//   hasil = Number(hasil)
//   return hasil

// };
// console.log(squareDigits(1231))

// const disemvowel = (string) => {
//   let vowels = ["a", "i", "u", "e", "o"];
//   let stringArr = string.split("");
//   let hasil = [];
//   for (let i = 0; i < stringArr.length; i++) {
//     if (!vowels.includes(stringArr[i].toLowerCase())) {
//       hasil.push(stringArr[i]);
//     }
//   }
//   hasil = hasil.join("");
//   return hasil;
// };

// console.log(disemvowel("Hello World LOL"))
// const highAndLow = (string) => {

//   let stringArr = string.split(" ");
//   let largest = stringArr[0];
//   let smallest = stringArr[0];
//   for (let i = 0; i < stringArr.length; i++) {
//       console.log(stringArr[i])
//     if (largest < stringArr[i]) {
//       largest = stringArr[i];
//     } else if (stringArr[i] < smallest) {
//       smallest = stringArr[i];
//     }
//   }
//   return [largest, smallest].join(" ");

// };
// console.log(highAndLow("5 2 3 6 -1"));

// const descendingOrder = (numb) => {
//   let numbToString = String(numb);
//   let stringArr = numbToString.split("").map(Number);
//   stringArr.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else if (a < b) {
//       return -1;
//     }
//     return 0;
//   });
//   return stringArr.join("");
// };
// //   let idk = [1,42,2,3,6,2,78]
// console.log(descendingOrder(72628091));

// const XO = (string) => {
//   let stringArr = string.split("");
//   let xCounter = 0;
//   let oCounter = 0;
//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i].toLowerCase() == "x") {
//       xCounter += 1;
//     } else if (stringArr[i].toLowerCase() == "o") {
//       oCounter += 1;
//     }
//   }
//   if (xCounter == oCounter) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(XO("xxOo"))

// const findShort = (string) => {
//   let stringArr = string.split(" ");
//   let shortest = stringArr[0].length;
//   for (let i = 0; i < stringArr.length; i++) {
//     if (shortest > stringArr[i].length) {
//       shortest = stringArr[i].length;
//     }
//   }
//   return shortest;
// };
// console.log(
//   findShort("aku adalah seorang lelaki yang tak pernah lelah mencari wanita")
// );

// const upArray = (arr = []) => {
//   let copyOfArr = [...arr];
//   let copyOfArr2 = [...arr];
//   copyOfArr.splice(copyOfArr.length - 1, 1);
//   let last = Number(copyOfArr.slice(copyOfArr.length - 1, copyOfArr.length));

//   let lastNumber = copyOfArr2.pop();
//   let added1 = lastNumber + 1;
//   console.log(copyOfArr);

//   if (added1 > 9) {
//     added1 = added1 % 10;
//     last = last + 1;
//   } else if (added1 < 0) {
//     return null;
//   }
//   copyOfArr.push(last);
//   copyOfArr.push(added1);
//   return copyOfArr;
// };
// let sample = [2, 3, 9];
// console.log(upArray(sample));

// const upArray = (arr = []) => {
//   let lastNumber = Number(arr.slice(arr.length - 1, arr.length));
//   let added1 = lastNumber + 1;
//   copyOfArr = [...arr]; // disini arr menjadi [2,3,6]
//   copyOfArr.splice(copyOfArr.length - 1, 1); // disini arr menjadi [2,3]

//   if (added1 > 9) {
//       added1 = added1 % 10
//   } else if (added1 < 0) {
//     return null;
//   }
//   copyOfArr.push(added1);
//   return copyOfArr;
// };
// let sample = [2, 3, 6];
// console.log(upArray(sample));
//BELUM SELESAI

// const toJadenCase = (string) => {
//     let stringArr = string.split(" ")
//     let hasil = ""
//     for (let i = 0; i < stringArr.length; i++) {
//         hasil += stringArr[i].toUpperCase()
//     }
//     return hasil
//   }
//   console.log(toJadenCase("babi ngepet lewat di depan rumahku"))
// BELUM SELESAI

// const friend = (arr = []) => {
//   let hasil = []
//   for (let i = 0; i < arr.length; i ++) {
//       if (arr[i].length == 4) {
//           hasil.push(arr[i])
//       }
//   }
//   return hasil
// }
// let sample = ["Ryan", "Kieran", "Mark"]
// console.log(friend(sample))

// const solution = () => {
//   maxNumber = 30;
//   let sum = 0;
//   for (let i = 0; i < maxNumber; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       sum += i;
//     } else if (i % 3 == 0) {
//       sum += i;
//     } else if (i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(solution());

// const spinWords = (string) => {
//   let stringArr = string.split(" ");
//   let hasil = [];
//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i].length < 5) {
//       hasil.push(stringArr[i]);
//     } else if (stringArr[i].length >= 5) {
//       hasil.push(stringArr[i].split("").reverse().join(""));
//     }
// }
//   return hasil.join(" ");
// };
// console.log(spinWords("apakah ada satu"));

// const likes = (names = []) => {
//   let hasil = ``;
//   for (let i = 0; i <= names.length; i++) {
//     if (names.length == 0) {
//       return (hasil = `no one likes this`);
//     } else if (names.length == 1) {
//       return (hasil = `${names[i]} likes this`);
//     } else if (names.length == 2) {
//       return (hasil = `${names[i]} and ${names[i + 1]} like this`);
//     } else if (names.length == 3) {
//       return (hasil = `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`);
//     } else if (names.length >= 4) {
//       return (hasil = `${names[i]}, ${names[i + 1]} and ${names.length - 2} others like this`);
//     }
//   }
//   return hasil;
// };
// let sampleZero = []
// let sample = ["Peter", "Janice", "Max", "Robert", "Sully"];
// console.log(likes(sample));

// const createPhoneNumber = (arr = []) => {
//   let hasil = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
//   return hasil
// }
// let sample = [1,2,3,4,5,6,7,8,9,0]
// console.log(createPhoneNumber(sample))

// const findOdd = (arr=[]) => {
//   for (let i = 0; i < arr.length; i ++) {
//     let count = arr.filter(value => value === arr[i]).length
//     if(count % 2 == 1){
//       return arr[i]
//     }
//   }
//   return -1
// }
// let sample = [1,1,4,1,1]
// console.log(findOdd(sample))

const alphabetPosition = (string) => {
  let stringArr = string.split("")
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let hasil = []
  for (let i = 0; i < stringArr.length; i++){
    hasil.push(alphabet.indexOf(stringArr[i])+1)
  }
  return hasil.join(" ")
}
console.log(alphabetPosition("mariska anak nakal"))
// belum selesai, harusnya kalo di kalimat ada yang bukan huruf, return nothing.