const wasMyLibrary = [];

// HTML Elements
const container = document.querySelector(".cards-container");
const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#open");
const closeDialog = document.querySelector("#close");
const add = document.querySelector("#add");
const form = document.querySelector("form");

// Object / Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// Fuctions to Add Items in the Library Array
const addBookToLibrary = (title, author, pages, read) => {
    wasMyLibrary.push({ title, author, pages, read })
    displayBooks()
}


// Dialog Evenet Listeners
openDialog.addEventListener("click", () => {
    dialog.showModal()
})

closeDialog.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close()
})

add.addEventListener("click", (event) => {
    if (document.querySelector("#book-title").value == "") {
    } else if (document.querySelector("#author").value == "") {
    } else if (document.querySelector("#page-num").value == "") {
    } else {
        let userInputTitle = document.querySelector("#book-title").value;
        let bookAuthorValue = document.querySelector("#author").value;
        let bookPageValue = document.querySelector("#page-num").value;
        let bookStatusValue = document.querySelector("#book-status").value;
        addBookToLibrary(userInputTitle, bookAuthorValue, bookPageValue, bookStatusValue);
        event.preventDefault();
        form.reset();
        dialog.close();
    }
}, false)


// Managing the Cards (Clearing Old cards, Read Status Change and Delete)
const displayBooks = () => {

    clearScreen();

    wasMyLibrary.forEach((element, index) => {

        const div = document.createElement("div");
        div.setAttribute("class", "card");

        const bookName = document.createElement("span");
        bookName.setAttribute("class", "book-name");
        bookName.textContent = `${element.title}`;

        const bookAuthor = document.createElement("span");
        bookAuthor.setAttribute("class", "book-author");
        bookAuthor.textContent = `${element.author}`;

        const bookPages = document.createElement("span");
        bookPages.setAttribute("class", "book-pages");
        bookPages.textContent = `${element.pages}`;

        const bookStatus = document.createElement("button");
        bookStatus.setAttribute("id", "status");
        bookStatus.textContent = `${element.read}`;
        bookStatus.addEventListener("click", () => {
            if (element.read === "Read") {
                element.read = "Unread";
                bookStatus.textContent = `${element.read}`;
                bookStatus.style.backgroundColor = "green";
            } else {
                element.read = "Read";
                bookStatus.textContent = `${element.read}`;
                bookStatus.style.backgroundColor = "red";
            }
        });

        const bookDelete = document.createElement("button");
        bookDelete.setAttribute("id", "delete");
        bookDelete.addEventListener("click", deleteItem)
        bookDelete.textContent = "Delete";

        bookDelete.dataset.id = `${index}`
        bookStatus.dataset.id = `${index}`

        container.append(div);
        div.append(bookName);
        div.append(bookAuthor);
        div.append(bookPages);
        div.append(bookStatus);
        div.append(bookDelete);
    })
}

const deleteItem = (event) => {
    let id = event.target.dataset.id;
    wasMyLibrary.splice(id, 1)
    displayBooks();
}

const clearScreen = () => {
    document.querySelectorAll(".card").forEach((element) => element.remove())
} 