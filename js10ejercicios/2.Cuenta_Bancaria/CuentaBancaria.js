class CuentaBancaria {
    #numeroCuenta;
    #titular;
    #saldo;
    #fechaApertura;
    #tipoCuenta;
    #isAvailable;

    /** 
     * @param {int} numeroCuenta  
     * @param {texto} titular
     * @param {float} saldo 
     * @param {int} fechaApertura
     * @param {texto} tipoCuenta 
     * @param {boolean} isAvailable;
     */

    constructor (numeroCuenta, titular, saldo, fechaApertura, tipoCuenta, isAvailable = true) {
        this.#numeroCuenta = numeroCuenta;
        this.#titular = titular; 
        this.#saldo = saldo; 
        this.#fechaApertura = fechaApertura;
        this.#tipoCuenta = tipoCuenta; 
        this.#isAvailable = isAvailable;
    }

    set numeroCuenta (numeroCuenta) {
        this.#numeroCuenta = numeroCuenta; 
    }

    set titular (titular) {
        this.#titular = titular; 
    }
    
    set saldo (saldo) {
        this.#saldo = saldo;
    }

    set fechaApertura (fechaApertura) {
        this.#fechaApertura = fechaApertura;
    }

    set tipoCuenta (tipoCuenta) {
        this.#tipoCuenta = tipoCuenta;
    }

    set isAvailable (isAvailable) {
        this.#isAvailable = isAvailable;
    }

    get numeroCuenta () {
        return this.#numeroCuenta;
    }

    get titular () {
        return this.#titular; 
    }

    get saldo () {
        return this.#saldo;
    }

    get fechaApertura () {
        return this.#fechaApertura;
    }

    get tipoCuenta () {
        return this.#tipoCuenta;
    }

    get isAvailable () {
        return this.#isAvailable;
    }

    depositar(monto) {
        if (monto <= 0) {
            console.log("El monto a depositar debe ser mayor que 0");
            return;
        }
        this.#saldo += monto;
        console.log(`Depósito de ${monto} realizado. Saldo actual: ${this.#saldo}`);
    }

    retirar (monto) {
        if (monto > this.#saldo) {
            console.log (`Fondos insuficientes. Saldo actual: ${this.#saldo}`);
        } else {  
            this.#saldo -= monto;
            console.log (`Retiro realizado. Saldo actual: ${this.#saldo}`);
        }
    }
    consultar () {
        console.log (`Cuenta N: ${this.#numeroCuenta}\nTitular: ${this.#titular}\nSaldo: ${this.#saldo}\nFecha de Apertura: ${this.#fechaApertura}\nTipo de Cuenta: ${this.#tipoCuenta}\nDisponible: ${this.#isAvailable}`);
    }
}
module.exports = CuentaBancaria;