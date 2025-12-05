class Cliente:
    def __init__(self, nombre, email, telefono):
        self._nombre = nombre
        self._email = email
        self._telefono = telefono

    def set_nombre(self, nombre):
        self._nombre = nombre

    def set_email(self, email):
        self._email = email

    def set_telefono(self, telefono):
        self._telefono = telefono

    def get_nombre(self):
        return self._nombre

    def get_email(self):
        return self._email

    def get_telefono(self):
        return self._telefono