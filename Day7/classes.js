// class Car {
//   constructor(tahun, merek, warna) {
//     this.year = tahun; //
//     this.brand = merek; //  BIKIN NILAI DEFAULT
//     this.color = warna; //
//     this.price = 0; //
//   }
// }
// const mobilBaru = new Car("2000", "Toyota", "white");
// const mobilLama = new Car("1995", "Ford", "Red");

// console.log(mobilBaru);
// console.log(mobilLama);

// const cars = [
//   { year: "2020", brand: "Toyota", color: "White" },
//   new Car("1990", "Ford", "Red"),
// ];




// let jualan = [
//     { items: "LOTR", prices: 2000, userCart: 0 },
//     { items: "Harry Potter", prices: 3000, userCart: 0 },
//     { items: "Sherlock", prices: 4000, userCart: 0 },
//     { items: "Naruto", prices: 5000, userCart: 0 },
//   ];


class Jualan {
    constructor (productName, price) {
        this.productName = productName
        this.price = price
        this.qty = 0
        this.bought = 0
    }
    calculateTotalPrice = () => {
        return this.price * this.qty
    }
    toString = () => {
        return `${this.productName} || Rp. ${this.price.toLocaleString()} x ${this.qty} = ${this.calculateTotalPrice().toLocaleString()}`
    }


}

const jualanBaru = [
    new Jualan ("Naruto", 2000),
    new Jualan ("Harry Potter", 7000),
    new Jualan ("Sherlock", 4000)
]
// console.log(jualanBaru.calculateTotalPrice())

for (i = 0; i < jualanBaru.length; i ++) {
    console.log(jualanBaru[i].toString())
}

// console.log(jualanBaru[1].price)      // Cara akses harga Naruto