import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';
//service
import { StudentService } from '../../../services/student.service';
//class
import { Student } from '../../../models/student';
//toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  alumnoForm: FormGroup;
  constructor(
    public studentService: StudentService,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.alumnoForm = this.fb.group({
      $id: new FormControl(null),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+$/),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+$/),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(5),
        Validators.max(50),
      ]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[6-7][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.studentService.getStudents();
    this.alumnoForm.reset();
  }
  esCampoValido(field: string) {
    return (
      (this.alumnoForm.get(field).touched ||
        this.alumnoForm.get(field).dirty) &&
      !this.alumnoForm.get(field).valid
    );
  }
  //mensajes de error
  obtenerMensajeError(field: string): string {
    let mensaje;
    if (this.alumnoForm.get(field).hasError('required')) {
      mensaje = 'El campo es requerido.';
    }
    switch (field) {
      case 'name' || 'lastname':
        if (this.alumnoForm.get(field).hasError('pattern')) {
          mensaje = 'Solo se permiten letras';
        }
        break;
      case 'age':
        if (this.alumnoForm.get(field).hasError('min')) {
          mensaje = 'El mínimo de edad es 5';
        } else if (this.alumnoForm.get(field).hasError('max')) {
          mensaje = 'El máximo de edad es 50';
        }
        break;
      case 'phone':
        if (this.alumnoForm.get(field).hasError('pattern')) {
          mensaje =
            'Tiene que empezar con 6 o 7 y debe cumplirse el formato (0000-0000)';
        }
        break;
      case 'email':
        if (this.alumnoForm.get(field).hasError('email')) {
          mensaje = 'Debe cumplir con el siguiente formato user@gmail.com';
        }
        break;
    }
    return mensaje;
  }
  addOrEdit() {
    if (this.alumnoForm.valid) {
      if (this.alumnoForm.get('$id').value == null) {
        this.studentService.insertStudent(this.alumnoForm.value);
        this.toastr.success('Operación Exitosa', 'Estudiante Registrado');
      } else {
        this.studentService.updateStudent(this.alumnoForm.value);
        this.toastr.success('Operación Exitosa', 'Estudiante Modificado');
      }
      this.alumnoForm.reset();
      this.studentService.selectedStudent = new Student();
    } else {
      this.toastr.error('Error', 'Existen Datos Inválidos');
    }
  }
}
