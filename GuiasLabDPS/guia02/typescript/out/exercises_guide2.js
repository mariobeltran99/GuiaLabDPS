"use strict";
var Rombo = (function () {
    function Rombo(dvertical, dhorizontal) {
        this.diagonalVertical = dvertical;
        this.diagonalHorizontal = dhorizontal;
    }
    Rombo.prototype.area = function () {
        return ((this.diagonalHorizontal * this.diagonalVertical) / 2).toString() + "cm^2";
    };
    return Rombo;
}());
var miRombo = new Rombo(20, 40);
console.log(miRombo.area());
var spiderman = {
    nombre: 'Peter Parker',
    poderes: ['trepar', 'fuerza', 'agilidad', 'telas de araña']
};
console.log(spiderman);
var Empleado = (function () {
    function Empleado(name, salary) {
        this.nombre = name;
        this.salario = salary;
    }
    Empleado.prototype.descuentos = function (salary) {
        var isss = salary * 0.05;
        var afp = salary * 0.15;
        var renta = salary * 0.08;
        var des = salary - isss - afp - renta;
        return "SUELDO BASE: $" + salary + " DESCUENTOS - ISSS: $" + isss + " - AFP: $" + afp + " - RENTA: $" + renta + " - SUELDO TOTAL: $" + des;
    };
    return Empleado;
}());
var miEmpleado = new Empleado("Carlos Gómez", 780.50);
console.log(miEmpleado.descuentos(miEmpleado.salario));
var Calculadora = (function () {
    function Calculadora() {
        this.num1 = 1;
        this.num2 = 2;
    }
    Calculadora.prototype.basicsOperations = function (dig1, dig2) {
        var sum = dig1 + dig2;
        var res = dig1 - dig2;
        var mul = dig1 * dig2;
        var div = dig1 / dig2;
        return "Suma: " + dig1 + "+" + dig2 + "=" + sum + "; Resta: " + dig1 + "-" + dig2 + "=" + res + "; Multiplicación: " + dig1 + "*" + dig2 + "=" + mul + "; División: " + dig1 + "/" + dig2 + "=" + div;
    };
    return Calculadora;
}());
var calculator = new Calculadora();
calculator.num1 = 7;
calculator.num2 = 6;
console.log(calculator.basicsOperations(calculator.num1, calculator.num2));
