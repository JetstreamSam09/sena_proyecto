class Automovil: 
    def __init__(self, marca, modelo, ano, color, motor):
        self._marca = marca 
        self._modelo = modelo 
        self._ano = ano 
        self._color = color
        self._motor = motor
        self._encendido = False

    def set_marca(self, marca):
        self._marca = marca

    def set_modelo(self, modelo):
        self._modelo = modelo

    def set_ano(self, ano):
        self._ano = ano

    def set_color(self, color):
        self._color = color

    def set_motor(self, motor):
        self._motor = motor

    def get_marca(self):
        return self._marca
    
    def get_modelo(self):
        return self._modelo

    def get_ano(self):
        return self._ano

    def get_color(self):
        return self._color

    def get_motor(self):
        return self._motor
    
    def get_encendido(self):
        return self._encendido

    def encender(self):
        if not self._encendido:
            self._encendido = True
            print("El automovil ha sido encendido.")
        else: 
            print("El automovil ya estaba encendido.")

    def apagar(self):
        if self._encendido:
            self._encendido = False
            print("El automovil fue apagado")
        else: 
            print("El automovil ya estaba apagado")

    def acelerar(self):
        if self._encendido:
            print("El automovil esta acelerando")
        else: 
            print("No es posible acelerar.El automovil esta apagado")

    def get_info(self):
        print(f"""
Automovil:
- Marca: {self._marca}
- Modelo: {self._modelo}
- Ano: {self._ano}
- Color: {self._color}
- Motor: {self._motor.get_info()}
""")