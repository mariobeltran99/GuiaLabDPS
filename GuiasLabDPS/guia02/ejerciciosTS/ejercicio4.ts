class Calculadora {
  numero1: number;
  numero2: number;
  constructor(num1, num2) {
    this.numero1 = num1;
    this.numero2 = num2;
  }

  operaciones() {
    let suma: number = this.numero1 + this.numero2;
    let resta: number = this.numero1 - this.numero2;
    let multi: number = this.numero1 * this.numero2;
    let div: number = this.numero1 / this.numero2;

    return (
      'Suma: ' +
      suma +
      ' || Resta: ' +
      resta +
      ' || Multiplicación: ' +
      multi +
      ' || División: ' +
      div
    );
  }
}

let operacion1 = new Calculadora(8, 5);
operacion1.operaciones();
