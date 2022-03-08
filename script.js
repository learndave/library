function Book(bookTitle, author, numPages, hasRead) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;

    this.addBookToLibrary = function(lib) {
        lib.push(this);
        refreshHTML();
    }
}

function refreshHTML() {
    books.innerHTML = "";

    for (let book of myLibrary) {
        addBookToHTML(book);
    }

    function addBookToHTML(bookObject) {
        let bookElement = document.createElement("div");
        bookElement.classList.add("book");
        
        let bookTitle = document.createElement("div");
        bookTitle.classList.add("book-title")
        bookTitle.textContent = bookObject.bookTitle;

        let bookDetails = document.createElement("div");
        bookDetails.classList.add("book-details");

        let author = document.createElement("div");
        author.classList.add("author");
        author.textContent = `by ${bookObject.author}`;

        let numPages = document.createElement("div");
        numPages.classList.add("num-pages")
        numPages.textContent = `${bookObject.numPages} pages`

        let readStatus = document.createElement("div");
        readStatus.classList.add("read-status");
        readStatus.textContent = bookObject.hasRead ? "Already read" : "Not read";

        bookDetails.appendChild(author);
        bookDetails.appendChild(numPages);
        bookDetails.appendChild(readStatus);

        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookDetails);
        
        books.appendChild(bookElement);
    }
}


function addBook(form) {
    let newBook =  new Book(form.querySelector("#book-title").value,
                            form.querySelector("#author").value,
                            form.querySelector("#num-pages").value,
                            form.querySelector("#has-read").checked);

    newBook.addBookToLibrary(myLibrary);

    return false;
}

let myLibrary = [];
let books = document.querySelector(".books");

let alice = new Book("Farewell", "Francis Dave Cabanting", 1208, false);

alice.addBookToLibrary(myLibrary);