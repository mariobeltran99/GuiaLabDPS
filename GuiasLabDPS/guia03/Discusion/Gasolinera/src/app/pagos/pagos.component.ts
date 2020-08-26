import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  horizontal:MatSnackBarHorizontalPosition = 'center';
  vertical:MatSnackBarVerticalPosition = 'top';
  public pagosForm:FormGroup;
  cont:number;
  opt:string;
  gal:number;
  pago:number;
  constructor(private fb:FormBuilder,private snack:MatSnackBar) {}

  ngOnInit(): void {
    this.pagosForm = this.fb.group({
      gasolina: new FormControl(null,[Validators.required]),
      galon: new FormControl(null,[Validators.required,Validators.min(0.05),Validators.max(150.00),Validators.pattern('^([0-9]+(\.?[0-9]?[0-9]?)?)')])
    });
    this.cont = 0;
  }
  enviar(){
    if(this.pagosForm.valid){
      this.openSnackBar('Pago Generado Exitosamente');
      const regul:number = 3.96;
      const espe:number = 4.25;
      const dies:number = 4.05;    
      this.opt = this.pagosForm.get('gasolina').value;
      this.gal = this.pagosForm.get('galon').value;
      console.log(this.gal)
      switch(this.opt){
        case 'Regular':
          this.pago = this.gal * regul;
        break;
        case 'Especial':
          this.pago = this.gal * espe;
        break;
        case 'Diesel':
          this.pago = this.gal * dies;
        break;
      }
      this.pagosForm.reset();
      this.pagosForm.clearValidators();
      this.cont++; 
    }else{
      return;
    }
  }
  obtenerMensajeError1(field:string) :string{
    let mensaje;
    if(this.pagosForm.get(field).errors.required){
      mensaje = 'El campo es requerido';
    }else if (field == 'galon'){
      if(this.pagosForm.get(field).hasError('pattern')){
       mensaje = 'Solo se aceptan números y con este formato (0.00)'; 
      }else if (this.pagosForm.get(field).hasError('min')){
        mensaje = 'El valor mínimo requerido es 0.05'; 
      }else if (this.pagosForm.get(field).hasError('max')){
        mensaje = 'El valor máximo requerido es 150.00'
      }
    }
    return mensaje;
  }

  esCampoValido(field:string) :boolean{
    return ((this.pagosForm.get(field).touched || 
    this.pagosForm.get(field).dirty) &&
    !this.pagosForm.get(field).valid);
  }
  openSnackBar(mensaje:string) {
    this.snack.open(mensaje, 'Cerrar', {
      duration: 5000,
      horizontalPosition: this.horizontal,
      verticalPosition: this.vertical
    });
  }

  clean(){
    this.cont = 0;
    this.pagosForm.reset();
  }
}
