class Libro {
    #isbn;
    #titlle;
    #autor;
    #publicationYear;
    #totalNunmberPages;
    #isAvailable;

    /**
     * @param {string} titlle
     * @param {string} isbn 
     * @param {string} autor
     * @param {number} publicationYear
     * @param {number} totalNunmberPages
     */


    constructor(titlle, isbn, autor, Year, NumPages, available ) {
        this.#titlle = titlle;
        this.#isbn = isbn;
        this.#autor = autor;
        this.#publicationYear = Year;
        this.#totalNunmberPages = NumPages;
        this.#isAvailable = true;
    
    }
    
     set titlle(titlle) {
        this.#titlle = titlle;

    }

    set isbn(isbn) {
        this.#isbn = isbn;

    }   

    set autor(autor) {
        this.#autor = autor;

    }

    set publicationYear(Year) {
        this.#publicationYear = Year;

    }

    set totalNunmberPages(NumPages) {
        this.#totalNunmberPages = NumPages;

    }

    set isAvailable(available) {
        this.#isAvailable = available;

    }

    get titlle() {
        return this.#titlle;
    }

    get isbn() {
        return this.#isbn;
    }

    get autor() {
        return this.#autor;
    }

    get publicationYear() {
        return this.#publicationYear;
    }

    get totalNunmberPages() {
        return this.#totalNunmberPages;
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    loan() {
        this.#isAvailable = false;
    }

    returnBook() {
        this.#isAvailable = true;
    }


}

module.exports = Libro;