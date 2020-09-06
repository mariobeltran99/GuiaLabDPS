import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';


  alumnoForm:FormGroup;
  alumnoArray:Alumno[] = [
    {id:1, name:"Alex", lastname:"Campos",age:35,address:"Soyapango",phone:"7848-5829",email:"alex@gmail.com"},
    {id:2, name:"Maria",lastname:"Lopez",age:20,address:"Ilopango",phone:"7846-5254",email:"marialopez@hotmail.com"},
    {id:3, name:"Juan", lastname:"Castro",age:25,address:"Ilobasco",phone:"6762-6852",email:"juan12@gmail.com"}
  ];
  selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0,address:'',phone:'',email:''};

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.alumnoForm = this.fb.group({
      nombre: new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-Z]+$/)]),
      apellido: new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-Z]+$/)]),
      edad: new FormControl(null,[Validators.required,Validators.min(5),Validators.max(50)]),
      direccion: new FormControl(null,[Validators.required]),
      telefono: new FormControl(null,[Validators.required,Validators.pattern('[6-7][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]')]),
      correo: new FormControl(null,[Validators.required,Validators.email])
    });
  }

   //validacion si fue tocado el control del formulario
   esCampoValido(field:string){
    return ((this.alumnoForm.get(field).touched || 
    this.alumnoForm.get(field).dirty) &&
    !this.alumnoForm.get(field).valid);
  }
  //mensajes de error
  obtenerMensajeError(field:string):string{
    let mensaje;
    if(this.alumnoForm.get(field).hasError('required')){
      mensaje = 'El campo es requerido.';
    }
    switch(field){
      case 'nombre' || 'apellido':
        if(this.alumnoForm.get(field).hasError('pattern')){
          mensaje = 'Solo se permiten letras';
        }
      break;
      case 'edad':
        if(this.alumnoForm.get(field).hasError('min')){
          mensaje = 'El mínimo de edad es 5';
        } else if(this.alumnoForm.get(field).hasError('max')){
          mensaje = 'El máximo de edad es 50';
        } 
      break;
      case 'telefono':
        if(this.alumnoForm.get(field).hasError('pattern')){
          mensaje = 'Tiene que empezar con 6 o 7 y debe cumplirse el formato (0000-0000)';
        }
      break;
      case 'correo':
        if(this.alumnoForm.get(field).hasError('email')){
          mensaje = 'Debe cumplir con el siguiente formato user@gmail.com';  
        }
      break;
    }
    return mensaje;
  }
  openForEdit(alumno: Alumno): void
  {
    this.selectedAlumno = alumno;
  }
  addOrEdit(): void
  {
    if(this.alumnoForm.valid){
      if(this.selectedAlumno.name == null 
        && this.selectedAlumno.lastname == null 
        && this.selectedAlumno.age == null 
        && this.selectedAlumno.address === null 
        && this.selectedAlumno.phone == null 
        && this.selectedAlumno.email == null){
          confirm("Hay campos vacíos");
      }else{
        if(this.selectedAlumno.id === 0) // INSERT
        {
          this.selectedAlumno.id = this.alumnoArray.length + 1;
          this.alumnoArray.push(this.selectedAlumno);
        }
        this.selectedAlumno = {id:0, name: '', lastname: '', age:0 ,address:'',phone:'',email:''};
        this.alumnoForm.reset();
      }
    }
    
  }
  delete(): void
  {
    if(confirm('¿Esta seguro de elimiar el Registro?'))
    {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0, name: '', lastname: '', age:0, address:'',phone:'',email:''};
      this.alumnoForm.reset();
    }
  }
}
