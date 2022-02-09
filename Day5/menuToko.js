let items = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
let prices = [2000, 3000, 4000, 5000];

function showMenu(items, prices) {
  let productsList = "";

  for (let i = 0; i < items.length; i++) {
    productsList += `${i + 1}. ${items[i]} Harga = Rp. ${prices[
      i
    ].toLocaleString()}\n`;
  }
  console.log(productsList);
}
showMenu(items, prices);


// jadi dinamis //

let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
let bookPrices = [2000, 3000, 4000, 5000];

let fruits = ["Mangga", "Anggur", "Jeruk", "Apel"];
let fruitPrices = [2000, 3000, 4000, 5000];

function showMenu(items, prices) {
  let productsList = "";

  for (let i = 0; i < items.length; i++) {
    productsList += `${i + 1}. ${items[i]} Harga = Rp. ${prices[
      i
    ].toLocaleString()}\n`;
  }
  console.log(productsList);
}

console.log("====BOOKS=====")
showMenu(books, bookPrices);
console.log("")

console.log("====FRUITS====")
showMenu(fruits, fruitPrices)
