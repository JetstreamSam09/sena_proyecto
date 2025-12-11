from Cuenta import Cuenta

def control_cuenta():
    cuenta = Cuenta (10293940593, "Miguel", 1400000, "01/12/2025", "Activa")

    cuenta.DepositarDinero(750000)
    cuenta.RetirarDinero(85000)
    cuenta.ConsultarDinero()
    cuenta.RetirarDinero(55000)
    cuenta.ConsultarDinero()
    
control_cuenta()