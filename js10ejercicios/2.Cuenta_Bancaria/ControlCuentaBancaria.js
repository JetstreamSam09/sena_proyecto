const CuentaBancaria = require ("./CuentaBancaria"); 

const cuenta = new CuentaBancaria (1017925514, "Miguel", 9000000, 2025, "Ahorros", true);

cuenta.depositar(545675);
cuenta.retirar(500000);
cuenta.consultar();