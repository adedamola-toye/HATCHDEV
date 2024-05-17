class Book {
    constructor(public title: string, public author: string) {}
}

class Library {
    private books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    displayBooks() {
        for (const book of this.books) {
            console.log(`${book.title} by ${book.author}`);
        }
    }
}

// Creating some books
const book1 = new Book("Daddy's Little Girls", "Mary Higgins Clark");
const book2 = new Book("Harry Potter and The Goblet of Fire", "JK Rowling");

// Creating a library and adding books to it
const library = new Library();
library.addBook(book1);
library.addBook(book2);

// Displaying books in the library
console.log("Books in the library:");
library.displayBooks();
