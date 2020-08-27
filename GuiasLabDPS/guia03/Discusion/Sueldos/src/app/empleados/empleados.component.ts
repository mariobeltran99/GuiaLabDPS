import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  private letras = /[a-zA-Z]+$/;
  horizontal:MatSnackBarHorizontalPosition = 'center';
  vertical:MatSnackBarVerticalPosition = 'top';
  public sueldoForm:FormGroup;
  constructor(private fb: FormBuilder,private snack:MatSnackBar) { }
  register =[];
  empleado:any;
  isss:number;
  renta:number;
  afp:number;
  finasal:number;
  cont:number;
  public ngOnInit(): void {
    this.sueldoForm = this.fb.group({
      nombre: new FormControl(null,[Validators.required,Validators.pattern(this.letras)]),
      sueldo: new FormControl(null,[Validators.required,Validators.min(50.00),Validators.pattern('^([0-9]+(\.?[0-9]?[0-9]?)?)')])
    });
    this.cont=0;
  }
  enviar(){
    if(this.sueldoForm.valid){
      this.openSnackBar();
      const desIsss = 0.073;
      const desRenta = 0.11;
      const desAfp = 0.051; 
      let name = this.sueldoForm.get('nombre').value;
      let salbase = this.sueldoForm.get('sueldo').value;
      this.sueldoForm.reset();
      Object.keys(this.sueldoForm.controls).forEach(key => {
        this.sueldoForm.controls[key].setErrors(null);
      });
      this.isss = salbase * desIsss;
      this.renta = salbase * desRenta;
      this.afp = salbase * desAfp;
      this.finasal = salbase - this.isss - this.renta - this.afp;
      this.empleado = {
        "nombre": name,
        "salariobase": salbase,
        "isss":this.isss,
        "renta":this.renta,
        "afp":this.afp,
        "salariofinal":this.finasal
      };
      this.register.push(this.empleado);
      this.cont++; 
    }else{
      return;
    }
  }
  obtenerMensajeError1(field:string) :string{
    let mensaje;
    if(this.sueldoForm.get(field).errors.required){
      mensaje = 'El campo es requerido';
    }else if (field == 'nombre'){
      if(this.sueldoForm.get(field).hasError('pattern')){
       mensaje = 'Solo se aceptan letras'; 
      }
    } else{
      if(this.sueldoForm.get(field).hasError('pattern')){
        mensaje = 'Solo se aceptan números y con el formato (0.00)';
      }else if(this.sueldoForm.get(field).hasError('min')){
        mensaje = 'El mínimo de salario requerido es 50.00';
      }
    }
    return mensaje;
  }

  esCampoValido(field:string) :boolean{
    return ((this.sueldoForm.get(field).touched || 
    this.sueldoForm.get(field).dirty) &&
    !this.sueldoForm.get(field).valid);
  }
  openSnackBar() {
    this.snack.open('Registrado Exitosamente', 'Cerrar', {
      duration: 5000,
      horizontalPosition: this.horizontal,
      verticalPosition: this.vertical
    });
  }
  
}
