// OOP Object Oriented Programming
//clase por defecto publica para todas las classses dentro de este archivo
// En ralidad es clase privada
class animal {
    constructor(categoria){
        this.categoria = categoria;
    }
}

class cuentaBancaria {

    constructor(saldo, tipo){
        this.saldo = saldo;
        this.tipo = tipo;
    }
    deposito (cantidad){
        this.saldo += cantidad;
    }

    retiro(cantidad){
        this.saldo -= cantidad;
    }
}

// Tarjeta de credito hereda de la clase cuenta bancaria
class tarjetaDeCredito extends cuentaBancaria {
    imprimeFechaCorte(){
        console.log("La fecha de corte es: ");
    }
    imprimePagoMin(){
        console.log("El pago minimo es: ");
    }
}

//var main = function(){
    let perro = new animal('perro');
    let gato = new animal('gato');

    console.log(perro.categoria);
    console.log(gato.categoria);

    let cuenta1 = new cuentaBancaria(5000, 'M');
    cuenta1.deposito(2000);
    cuenta1.retiro(2500);
    cuenta1.deposito(4000);
    console.log(cuenta1.saldo);

    let cuenta2 = new cuentaBancaria(10000, 'E');
    cuenta2.deposito(2000);
    cuenta2.retiro(2500);
    cuenta2.deposito(4000);
    console.log(cuenta2.saldo);

    let cuenta3 = new cuentaBancaria();
    console.log(cuenta3.saldo);

    let cuenta4 = new tarjetaDeCredito(5000, 'TC');
    console.log(cuenta4.saldo);
    console.log(cuenta4.tipo);
    cuenta4.imprimeFechaCorte();
    cuenta4.imprimePagoMin();
//}

//main();