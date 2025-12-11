class Cuenta:
    def __init__(self, NumeroCuenta, Titular, Saldo, Fecha, Estado):
        self._NumeroCuenta = NumeroCuenta
        self._Titular = Titular
        self._Saldo = Saldo
        self._Fecha = Fecha
        self._Estado = Estado
    def set_NumeroCuenta(self, NumeroCuenta):
        self._NumeroCuenta = NumeroCuenta

    def set_Titular(self, Titular):
        self._Titular = Titular
    
    def set_Saldo(self, Saldo):
        self._Saldo = Saldo

    def set_Fecha(self, Fecha):
        self._Fecha = Fecha
    
    def set_Estado(self, Estado):
        self._Estado = Estado
    def get_NumeroCuenta(self):
        return self._NumeroCuenta

    def get_Titular(self):
        return self._Titular
    
    def get_Saldo(self):
        return self._Saldo
    
    def get_Fecha(self):
        return self._Fecha
    
    def get_Estado(self):
        return self._Estado

    def DepositarDinero(self, monto):
        if monto <= 0:
            print("El monto a depositar debe ser mayor que 0")
        else:
            self._Saldo += monto
            print(f"Deposito de {monto} fue realizado. Saldo actual: {self._Saldo}")

    def RetirarDinero(self, monto):
        if monto > self._Saldo:
            print(f"Fondos insuficiente,Su saldo actual: {self._Saldo}")
        else:
            self._Saldo -= monto
            print(f"Retiro de {monto} fue realizado. Saldo actual: {self._Saldo}")

    def ConsultarDinero(self):
        print(f"""
Cuenta N: {self._NumeroCuenta}
Titular: {self._Titular}
Saldo: {self._Saldo}
Fecha de Apertura: {self._Fecha}
Estado: {self._Estado}
""")