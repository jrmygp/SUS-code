// let items = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
// let prices = [2000, 3000, 4000, 5000];

let produk = [
  { title: "LOTR", harga: 2000 },
  { title: "HarryPotter", harga: 3000 },
  { title: "Sherlock", harga: 4000 },
  { title: "Naruto", harga: 5000 },
];

console.log(produk[0].title)
for (let i = 0; i < produk.length; i++) {
  console.log(
    `Nama: ${produk[i].title} || Harga : Rp. ${produk[
      i
    ].harga.toLocaleString()}`
  );
}

// const cars = [
//   { brand: "Toyota", year: "2010", colors: ["Red", "Black"] },
//   { brand: "Honda", year: "2007", colors: ["Red", "Black", "White"] },
// ];
// // console.log(car)
// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i]
//     // let row = `${i+1}. Brand: ${car.brand} || Year : ${car.year} || Colors : `
//     let row = `${i+1}. Brand: ${car.brand} || Year : ${car.year} || Colors : ${car.colors.join(" ")}` // cara gampang ga usah pake 2 looping
    

//     // for (let j = 0; j < cars[i].colors.length; j++) {
//     //     row += `${car.colors[j]} `

//     // }
//     console.log(row)
// }
