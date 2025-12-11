#19.Capture el sexo de una persona y salude a dicha de persona de manera adecuada según su sexo.

Sexo = "H"

def tiposexo(sexo):
    if sexo == "M":
        return "Usted es Mujer"
    elif sexo == "H":
        return "Usted es Hombre"
    else:
        return "Usted es desconocido"
    
print(tiposexo(Sexo))