class Pedido {
    #fecha;
    #total;
    #cliente;
    #itemPedido = [];

    /**
     * @param {Date} fecha
     * @param {number} total
     * @param {Cliente} cliente
     * @param {Producto[]} itemPedido
     */
    constructor(fecha, total, cliente, itemPedido = []) {
        this.#fecha = fecha;
        this.#total = total;
        this.#cliente = cliente;
        this.#itemPedido = itemPedido;
    }

    set fecha (fecha) {
        this.#fecha = fecha;
    }
    
    set total (total) {
        this.#total = total;
    }

    set cliente (cliente) {
        this.#cliente = cliente;
    }

    set itemPedido (itemPedido) {
        this.#itemPedido = itemPedido;
    }

    get fecha () {
        return this.#fecha;
    }

    get total () {
        return this.#total;
    }

    get cliente () {
        return this.#cliente;
    }

    get itemPedido () {
        return this.#itemPedido;
    }

    agregarProducto (producto) {
        this.#itemPedido.push(producto);
    }

    mostrarInfo() {
        const productos = this.#itemPedido.map(p => p.mostrarInfo()).join(', ');
        return `Pedido del cliente ${this.#cliente.nombre} - Total: $${this.#total}, Fecha: ${this.#fecha.toLocaleDateString()}, ${productos}`;
    }
}

module.exports = Pedido;