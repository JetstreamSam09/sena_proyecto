class Pedido:
    def __init__(self, cliente, fecha):
        self._cliente = cliente
        self._fecha = fecha
        self._total = 0
        self._productos = []

    def set_cliente(self, cliente):
        self._cliente = cliente

    def set_fecha(self, fecha):
        self._fecha = fecha

    def get_cliente(self):
        return self._cliente

    def get_fecha(self):
        return self._fecha

    def get_total(self):
        return self._total

    def get_productos(self):
        return self._productos

    def agregarProducto(self, producto):
        self._productos.append(producto)
        self._total += producto.get_precio()