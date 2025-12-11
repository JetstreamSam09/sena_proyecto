class Libro:
    def __init__(self, titulo, autor, anoPublicacion, NumeroPaginas, Estado):
        self._titulo = titulo
        self._autor = autor
        self._anoPublicacion = anoPublicacion
        self._NumeroPaginas = NumeroPaginas
        self._Estado = Estado

    def set_titulo(self, titulo):
        self._titulo = titulo

    def set_autor(self, autor):
        self._autor = autor

    def set_anoPublicacion(self, ano):
        self._anoPublicacion = ano

    def set_NumeroPaginas(self, paginas):
        self._NumeroPaginas = paginas

    def set_Estado(self, estado):
        self._Estado = estado

    def get_titulo(self):
        return self._titulo

    def get_autor(self):
        return self._autor

    def get_anoPublicacion(self):
        return self._anoPublicacion

    def get_NumeroPaginas(self):
        return self._NumeroPaginas

    def get_Estado(self):
        return self._Estado
    
    def loan(self):
        self._Estado = False

    def returnBook(self):
        self._Estado = True