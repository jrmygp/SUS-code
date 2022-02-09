//====PEMBUATAN FUNCTION====

// function displayMenu () {
//     console.log(`Hello World!`)

// }
// displayMenu()

// displayMenu()



// // ====PARAMETER FUNCTION ====
// function displayUserName (username) {
//     console.log(`Hello ${username}`)
// }
// displayUserName("Doraemon")

// // ====BACKUP PLAN====
// function displayUserName (username = "Default") {
//     console.log(`Hello ${username}`)
// }
// displayUserName("Doraemon") // Yang bakal muncul doraemon, tapi kita udah ngasih nilai "default" incase user ga input apa-apa ke sistem,
// ======================== // kalo user ga ngisi apa-apa yang keluar "default"

// dua variabel dalam satu function //
// function displayUserName (username = "Naruto", greeting) {
//     console.log(`${greeting} ${username}`)

//     let username = "Doraemon"
//     let greeting = "Good Morning"
// }
// displayUserName(greeting, username) // yang muncul tetep bakal Doraemon Good Morning

// function sumTwoNumbers (a = 0, b = 0) {
//     // return a + b        // ketika function tsb memiliki sebuah return, maka hasil dari function tsb adalah resturn tsb.
 
//    return "Hello"          // walaupun kita kasih function 3 + 7, tapi ada return, tetep hasilnya bakal nilai return tsb.
// }                          // basically, artinya sumTwoNumbers = return
// kalo function ketemu return, dia bakal berhenti ngeloop, sama aja kayak break.

// function sumTwoNumbers(a = 0, b = 0) {
    
//         let hasil = a + b
    
//         if (hasil > 10) {
//             return "Angka anda lebih dari 10"       // dari pada pake if else atau else, lebih mudah pake return.
//         }
//             return "Angka anda 10 atau lebih kecil"
// }

// let result = sumTwoNumbers(7,1)
// console.log (result)


function sumTwoNumbers(a = 0, b = 0) {

    if (typeof a !== "number" || typeof b !== "number") {
        return "Gunakan tipe data yang benar!"       
    }
    if (isNaN(a) || isNaN(b)) {
        return "Pastikan number anda sesuai!"
    }
    let hasil = a + b
    return hasil
}

let result = sumTwoNumbers(7,NaN)
console.log(result)



// ==== anonymous function ====
// const a = function () {
// }      // kenapa namanya anonymous function karena ga punya nama
    
// a()    // buat manggil function anonymousnya


// ==== arrow function ====
// const b = () => {

// }
// b()

const tambah = (first, second, callback) => {
    return callback (first, second)
}
console.log (
    tambah(3,5, (a,b) => {
        return a + b }
    )
)