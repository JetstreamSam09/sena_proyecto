const automóvil  = require ('./Automovil.js');
const Motor = require ('./Motor.js');

automóvil1 = new automóvil('Kia', '4x4', 2020, 'Rojo');
automóvil2 = new automóvil('Renault', 'Duster', 2019, 'Azul');
automóvil3 = new automóvil('Ferrari', 'Prado', 2018, 'Blanco');

motor1 = new Motor(1800, 'Gasolina', 140);
motor2 = new Motor(2000, 'Gasolina', 160);
motor3 = new Motor(1500, 'Gasolina', 120);


console.log(`El automovil es un ${automóvil1.marca}. tiene un cilindraje de ${motor1.cilindrada} y usa combustible ${motor1.tipoCombustible} ${automóvil1.encender()}.`);
console.log(`El automovil es un ${automóvil2.marca}. tiene un cilindraje de ${motor2.cilindrada} y usa combustible ${motor2.tipoCombustible} ${automóvil2.apagar()}.`);
console.log(`El automovil es un ${automóvil3.marca}. tiene un cilindraje de ${motor3.cilindrada} y usa combustible ${motor3.tipoCombustible} ${automóvil3.acelerar()}.`);
