// -------EJERCICIOS GUIA 2---------
// --Mario Josué Beltrán García BG171969---------
// ------EJERCICIO 1-----------------
class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;
    constructor(dvertical:number,dhorizontal:number){
        this.diagonalVertical= dvertical;
        this.diagonalHorizontal= dhorizontal;
    }
    area():string{
        return ((this.diagonalHorizontal*this.diagonalVertical)/2).toString() + "cm^2";
    }
}
let miRombo = new Rombo(20,40);
console.log(miRombo.area());
// -------EJERCICIO 2-----------------------
interface Spiderman {
    nombre:string;
    poderes:Array<string>;
}
let spiderman:Spiderman = {
    nombre: 'Peter Parker',
    poderes:['trepar','fuerza','agilidad','telas de araña']
}
console.log(spiderman);
// --------EJERCICIO 3--------------------------
class Empleado{
    nombre:string;
    salario:number;
    constructor(name:string,salary:number){
        this.nombre = name;
        this.salario = salary;
    }
    descuentos(salary:number):string{
        let isss = salary*0.05;
        let afp = salary*0.15;
        let renta = salary*0.08;
        let des = salary - isss - afp - renta;
        return "SUELDO BASE: $" + salary + " DESCUENTOS - ISSS: $" + isss + " - AFP: $" + afp + " - RENTA: $" + renta + " - SUELDO TOTAL: $" + des; 
    }
}
let miEmpleado = new Empleado("Carlos Gómez",780.50);
console.log(miEmpleado.descuentos(miEmpleado.salario));
//-------------EJERCICIO 4--------------------------------------
class Calculadora{
    num1:number;
    num2:number;
    constructor(){
        this.num1= 1;
        this.num2= 2;
    }
    basicsOperations(dig1:number,dig2:number):string{
        let sum = dig1 + dig2;
        let res = dig1 - dig2;
        let mul = dig1 * dig2;
        let div = dig1 / dig2;
        return "Suma: "+ dig1 +"+"+dig2+"="+sum+"; Resta: "+dig1 +"-"+dig2+"="+res+"; Multiplicación: "+ dig1+"*"+dig2+"="+mul+"; División: "+dig1+"/"+dig2+"="+div;
    }
}
let calculator = new Calculadora();
calculator.num1 = 7;
calculator.num2 = 6;
console.log(calculator.basicsOperations(calculator.num1,calculator.num2));
//----------------------------------------------------------------------------------