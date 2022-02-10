const books = ["Harry Potter", "Naruto", "Doraemon", "Sherlock",]


// const duplicateForEach = (arr, callback) => {
// for (let i = 0; i < arr.length; i ++) {
//     callback(arr[i], i, arr)
// }
// }
// duplicateForEach(numbers, (val, idx, array) => {
// // console.log(val)

// })


// Goals : Duplikat filter
// 1. Duplikat method filter
// 2. Filter akan menghasilkan sebuah array -> pasti akan return array
// 3. Gimana cara menentukan item yang akan masuk ke array?
// Call back function harus menghasilkan true
// 4. Gimana cara memasukan item ke dalam array
// menggunakan method push

const duplicateFilter = (arr, callback) => {
    let resultArr = []
    for (i=0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
        resultArr.push(arr[i])
    }

    }
    return resultArr
}
let filteredData = duplicateFilter(books, (val, idx, array) => {
    return val.length > 6
})

// let filteredData = books.filter((val) => {
//     return val.length > 6
// })
console.log(filteredData)