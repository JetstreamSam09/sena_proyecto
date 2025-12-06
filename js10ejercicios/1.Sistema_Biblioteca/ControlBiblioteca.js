const libro = require('./Libro');

const libro1 = new libro('El Principito', '978-3-16-148410-0', 'Antoine de Saint-Exupery', 1943, 96, true);
const libro2 = new libro('El Hobbit', '978-0-06-088328-7', 'J. R. R. Tolkien', 1937, 310, true);

libro1.loan();
console.log(`El titulo del libro es: "${libro1.titlle}" : ${libro1.isbn}, el Autor del libro: ${libro1.autor}, Ano de Publicacion: ${libro1.publicationYear}, Numero de Paginas: ${libro1.totalNunmberPages}, Disponible: ${libro1.isAvailable}`);
console.log(`El titulo del libro es: "${libro2.titlle}" : ${libro2.isbn}, el Autor del libro: ${libro2.autor}, Ano de Publicacion: ${libro2.publicationYear}, Numero de Paginas: ${libro2.totalNunmberPages}, Disponible: ${libro2.isAvailable}`);

libro1.returnBook();
console.log(`El titulo del libro es: "${libro1.titlle}" : ${libro1.isbn}, el Autor del libro: ${libro1.autor}, Ano de Publicacion: ${libro1.publicationYear}, Numero de Paginas: ${libro1.totalNunmberPages}, Disponible: ${libro1.isAvailable}`);