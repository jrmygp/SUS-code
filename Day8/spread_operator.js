const product = {
    productName : "LOTR",
    price : 10000,
    quantity : 0
}

const newProduct = {
    // productName : "LOTR",
    // price : 10000,
    // quantity : 0
   ...product,
   productName : "Harry Potter",
   author : "Seto"
}
// product.price = 9999
console.log(newProduct)

// destructuring

const { productName, quantity, price } = product // ngeluarin productName, quantity, price dari si product
const { productName : hargaProduk } = product // ganti nama si productName jadi hargaProduk
                                                // kalo object destructuring berpacu ke huruf/kalimat/apalah namanya.

const numbers = [1,2,3,4]
const [a,b] = numbers
console.log(a) // yang bakal keluar angka 1, kalo destructuring array berpacu ke angka.