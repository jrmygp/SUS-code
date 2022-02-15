// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"
const noVocal = (string) => {
  let vocal = ["a", "i", "u", "e", "o"];
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!vocal.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
};
console.log(noVocal("anjaygurinjay"));

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71
//
const alphabetToNumber = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = 0;
  for (let i = 0; i < string.split("").length; i++) {
    result += alphabet.indexOf(string[i]) + 1;
  }
  return result;
};
console.log(alphabetToNumber("abc"));

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// // Output: 4
const alphabetToNumber = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = 0;
  for (let i = 0; i < string.split("").length; i++) {
    if (!((alphabet.indexOf(string[i]) + 1) % 2 == 0)) {
      result += alphabet.indexOf(string[i]) + 1;
    }
  }
  return result;
};
console.log(alphabetToNumber("abc"));

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)
arr_diff = (a1, a2) => {
  let a = [],
    diff = [];

  for (let i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }

  for (let i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }

  for (let k in a) {
    diff.push(k);
  }

  return diff;
};

console.log(arr_diff([1, 3, 7, 4], [1, 5, 3, 7, 4]));

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah

arr1 = [1, 3, 7, 4];
arr2 = [1, 5, 3, 7, 0];
arr3 = arr1.concat(arr2);

const removeDuplicates = (value, idx, arr) => {
  return arr.indexOf(value) == idx;
};

const remove = arr3.filter(removeDuplicates);

console.log(remove);
