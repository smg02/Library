const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = (title, author, pages) => {
    myLibrary.push({title, author, pages})
}


addBookToLibrary('hp', 'jk', 324);

addBookToLibrary('hp2', 'jk', 652);

addBookToLibrary('hp3', 'jk', 545);

myLibrary.forEach((element) => {
    console.log(element)
})
// console.log(myLibrary[1])

// Book.prototype.showStats = function() {
//     return `${this.title}, ${this.author}, ${this.pages} and you have ${this.read}!`
// }

// const theHobbit = new Book("theHobbit", "John Cena", 934, "not read")
// console.log(theHobbit.showStats())

// console.log(Object.getPrototypeOf(theHobbit))
// console.log(Book.prototype)

// console.log(theHobbit.valueOf())