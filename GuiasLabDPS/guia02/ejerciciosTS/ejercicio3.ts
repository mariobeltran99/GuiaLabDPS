class Empleado {
  nombre: string;
  salario: number;
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  salarioFinal() {
    let AFP: number = 0.0725;
    let ISSS: number = 0.03;
    let descuento: number = this.salario * AFP + this.salario * ISSS;
    return (
      'Salario: ' +
      this.salario +
      ' || Descuentos: ' +
      descuento +
      ' || Salario final: ' +
      (this.salario - descuento)
    );
  }
}

let empleado1 = new Empleado('Andres Chapeton', 600);
empleado1.salarioFinal();
