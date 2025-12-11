from Libro import Libro
Libro1 = Libro("El senor de los anillos", "J. R. R. Tolkien", 1954, 450, True)
print(f"El libro es: {Libro1.get_titulo()}, su autor es: {Libro1.get_autor()}, el ano de su publicacion es: {Libro1.get_anoPublicacion()}, y su estado es: {Libro1.get_Estado()}")

Libro1.loan()                     
Libro1.returnBook()             