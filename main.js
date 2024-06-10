const myLibrary = [];
const container = document.querySelector(".cards-container");

const changeReadStatus = () => {
    console.log("works")
}

// const bookTitle = document.querySelector(".book-name");
// const bookStatus = document.querySelector("#status");
// const bookDelete = document.querySelector("#delete");

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

    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const bookName = document.createElement("span");
    bookName.setAttribute("class", "book-name");
    bookName.textContent = `${element.title}`;

    const bookStatus = document.createElement("button");
    bookStatus.setAttribute("id", "status");
    bookStatus.addEventListener(changeReadStatus);
    bookStatus.textContent = "Read";
    
    const bookDelete = document.createElement("button");
    bookDelete.setAttribute("id", "delete");
    bookDelete.textContent = "Delete";
    
    container.append(div);
    div.append(bookName);
    div.append(bookStatus);
    div.append(bookDelete);
})


// Book.prototype.showStats = function() {
    //     return `${this.title}, ${this.author}, ${this.pages} and you have ${this.read}!`
    // }

// const theHobbit = new Book("theHobbit", "John Cena", 934, "not read")
// console.log(theHobbit.showStats())

// console.log(Object.getPrototypeOf(theHobbit))
// console.log(Book.prototype)

// console.log(theHobbit.valueOf())