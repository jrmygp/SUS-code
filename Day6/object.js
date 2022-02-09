const buku = {
  title: "Harry Potter",
  author: {
    name: "J.K. Rowling",
    age: 50,
    nationality: "England",
  },
  pages: 658,
  yearReleased: "2001",
  alternativeTitles: ["Sang Penyihir", "The Wizard"],
  sequels : [
      {
          title : "Harry Potter 2",
          yearReleased : "2003"
      },
      {
          title : "Harry Potter 3",
          yearReleased : "2005"
      },
      {
          title : "Harry Potter 4",
          yearReleased : "2006"
      }
  ]
};

//object (buku) > properties (alternativeTitles) > object ("Sang Penyihir")

// console.log(buku.author) // cara pertama akses properti (dot notation)
// console.log(buku.author.age)
// console.log(buku.author.name)
// console.log(buku.author.nationality)
// console.log(buku.alternativeTitles[0])
// console.log(buku.sequels[1].yearReleased)

// console.log(buku["title"]) // cara kedua skses properti (bracket notation)
// const title = "pages"
// console.log(buku[title]) // Kalo mau pake bracket notation, harus console.log(buku["title"])

// delete buku.title // Cara ngehapus property dalam object
// buku.publisher = "Purwadhika" // Cara nambah property ke dalam object

// console.log(buku)

// object destructuring
let {yearReleased, title, pages} = buku
console.log (yearReleased, title, pages)


