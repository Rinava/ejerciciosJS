//ejercicio 1
// Crear un objeto CuentaBancaria mediante una función constructora que contenga los siguientes datos:
// Nombre del titular.
// Número de cuenta.
// Apellido del titular.
// Saldo.
// Movimientos.

function CuentaBancaria(nombre, apellido, numCuenta, saldo, movimientos) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numCuenta = numCuenta;
    this.saldo = saldo;
    this.movimientos = movimientos;

    // Crear métodos para:
    // Mostrar el nombre completo del titular.
    // Debitar dinero de la cuenta. Si no tiene saldo suficiente tiene que mostrar un mensaje por consola y no realizar la operación.
    // Acreditar dinero en la cuenta.
    // Mostrar el saldo de la cuenta.
    // Mostrar el historial de movimientos.

    this.mostrarNombreCompleto = function () {
        console.log('Nombre Completo : ' + this.nombre + ' ' + this.apellido)
    };
    this.debitar = function (costo) {
        if (costo <= this.saldo) {
            this.saldo -= costo;
            this.movimientos++;
            console.log('Costo: ' + costo + ' | Saldo restante : ' + this.saldo + ' | Movimientos  : ' + this.movimientos);
        } else {
            console.log('No cuenta con montos suficientes para realizar esta operación');
        }

    };
    this.acreditar = function (monto) {
        this.saldo += monto;
        this.movimientos++;
        console.log('Monto: ' + monto + ' | Saldo restante : ' + this.saldo + ' | Movimientos  : ' + this.movimientos);
    }
    this.consultaSaldo=function(){
        console.log('Saldo : ' + this.saldo );
    }
    this.consultaMovimientos=function(){
        console.log('Movimientos : ' + this.movimientos );
    }

}
const cuenta1 = new CuentaBancaria('Lara', 'Mateo', 1, '1000', 0);
cuenta1.mostrarNombreCompleto();
cuenta1.consultaSaldo();
cuenta1.debitar(100);
cuenta1.acreditar(2000);
cuenta1.debitar(100000);
