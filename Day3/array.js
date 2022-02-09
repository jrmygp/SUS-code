// console.log(`Sasuke`);
// console.log(`Naruto`);
// console.log(`Itachi`);
// console.log(`Kakashi`);
// console.log(`Jiraya`);

// ARRAY
const ninja = [`Sasuke`, // 0
`Naruto`, // 1
`Itachi`, // 2
`Kakashi`, // 3
`Jiraya`]; // 4

// cara nambah variable ke array
ninja.push (`Pain`)
ninja[6] = `Madara` // manual, ga dinamis
ninja[ninja.length] = `Madara` // kalo pake yang ini, dia bakal selalu nambahin variable baru ke array, ga perlu ketik variable ke berapa lagi
// console.log (ninja)

// console.log(books[books.length - 1]) // untuk ngeliat variable terakhir
// // cara mengganti variabel di dalam array
// // ganti naruto jadi boruto
ninja[1] = `Boruto`

// //cara mengetahui variabel itu di nomer berapa
// console.log(ninja.indexOf(`Itachi`))

// // Cara nampilin semua variabel
for (let i = 0; i < ninja.length; i++) {
    console.log(ninja[i])
}


// === duplicate indexOf ===
// let searchText = "Itachi"
// let resultIndex

// for (let i = 0; i < ninja.length; i++) {
//     if (books[i] == searchText) {
//         resultIndex = i;
//         break
//     }
// }
// console.log(ninja[resultIndex])

// Cara menghapus variable dalam array
// hapus naruto
// ninja.splice(2, 1); // 2 = naruto, 1 = variabel yang bakal di delete, kalo 2 berati setelah naruto juga ke delete.
// hapus = splice
// nambah = push
// hapus variabel paling terakhir = pop

// cara bikin suatu sentence dibagi-bagi ke dalam array
const sentence = "halo selamat datang di rumah saya"
const words = sentence.split(" ") //di bagi pake spasi, bisa aja dibagi pake huruf "a" tapi nanti jadi acak adul karena kalimat dipotong setiap huruf a
console.log(words)


