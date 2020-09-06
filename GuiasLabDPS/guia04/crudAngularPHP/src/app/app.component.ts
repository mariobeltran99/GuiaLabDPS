import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { FormGroup, Validators,FormBuilder,FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngularPHP';

  articulos = null;
  art = {
    codigo: 0,
    descripcion: null,
    precio: null,
    proveedor: null,
    fabricante: null
  }
  articuloForm:FormGroup;
  
  constructor(
    private articulosServicio:ArticulosService,
    private fb:FormBuilder 
  ){}
  
  ngOnInit(){
    this.recuperarTodos();
    this.articuloForm = this.fb.group({
      descrip: new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-Z]+$/),Validators.minLength(4),Validators.maxLength(40)]),
      price: new FormControl(null,[Validators.required,Validators.min(0.05),Validators.max(1000.00),Validators.pattern('^([0-9]+(\.?[0-9]?[0-9]?)?)')]),
      provee: new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-Z]+$/),Validators.minLength(4),Validators.maxLength(40)]),
      fabri: new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-Z]+$/),Validators.minLength(4),Validators.maxLength(40)])
    });
  }

  recuperarTodos(){
    this.articulosServicio.recuperarTodos()
    .subscribe(result => this.articulos = result);
  }
  alta() {
    if(this.articuloForm.valid){
      this.articulosServicio.alta(this.art).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
          this.art = {
            codigo: 0, 
            descripcion: null, 
            precio: null,
            proveedor:null,
            fabricante:null
          };
        }
      });
      this.articuloForm.reset();
    }
    
  }
  baja(codigo) {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
      this.articulosServicio.baja(codigo).subscribe(datos => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      });
    }
  }
  modificacion() {
    if(this.articuloForm.valid){
      this.articulosServicio.modificacion(this.art).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
          this.art = {
            codigo: 0, 
            descripcion: null, 
            precio: null,
            proveedor:null,
            fabricante:null
          };
        }
      });
      this.articuloForm.reset();
    } 
  }
  seleccionar(codigo) {
    this.articulosServicio.seleccionar(codigo).
    subscribe(result => this.art = result[0]);
  }
  hayRegistros() {
    return true;
  }
  esCampoValido(field:string){
    return ((this.articuloForm.get(field).touched || 
    this.articuloForm.get(field).dirty) &&
    !this.articuloForm.get(field).valid);
  }
  obtenerMensajeError(field:string):string{
    let mensaje;
    if(this.articuloForm.get(field).errors.required){
      mensaje = 'El campo es requerido.';
    }
    switch(field){
      case 'descrip':
        if(this.articuloForm.get(field).hasError('pattern')){
          mensaje = 'Solo se permiten letras';
        } else if(this.articuloForm.get(field).hasError('minlength')){
          mensaje = 'Mínimo 4 carácteres';
        } else if(this.articuloForm.get(field).hasError('maxlength')){
          mensaje = 'Máximo 40 carácteres';
        }
      break;
      case 'provee':
        if(this.articuloForm.get(field).hasError('pattern')){
          mensaje = 'Solo se permiten letras';
        } else if(this.articuloForm.get(field).hasError('minlength')){
          mensaje = 'Mínimo 4 carácteres';
        } else if(this.articuloForm.get(field).hasError('maxlength')){
          mensaje = 'Máximo 40 carácteres';
        }
      break;
      case 'fabri':
        if(this.articuloForm.get(field).hasError('pattern')){
          mensaje = 'Solo se permiten letras';
        } else if(this.articuloForm.get(field).hasError('minlength')){
          mensaje = 'Mínimo 4 carácteres';
        } else if(this.articuloForm.get(field).hasError('maxlength')){
          mensaje = 'Máximo 40 carácteres';
        }
      break;
      case 'price':
        if(this.articuloForm.get(field).hasError('min')){
          mensaje = 'El mínimo es de $0.05';
        }else if(this.articuloForm.get(field).hasError('max')){
          mensaje = 'El máximo es de $1000.00';
        }else if(this.articuloForm.get(field).hasError('pattern')){
          mensaje = 'Debe cumplir el formato $(0.00)';
        }
      break;
    }
    return mensaje;
  }
}
