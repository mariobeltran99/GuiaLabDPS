import { Component, OnInit } from '@angular/core';
//model
import { Student } from '../../../models/student';
//service
import { StudentService } from '../../../services/student.service';
//toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  studentList: Student[];
  constructor(
    private studentService: StudentService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    return this.studentService
      .getStudents()
      .snapshotChanges()
      .subscribe((item) => {
        this.studentList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x['$id'] = element.key;
          this.studentList.push(x as Student);
        });
      });
  }
  onEdit(student:Student){
    this.studentService.selectedStudent = Object.assign({},student);
  }
  onDelete($id:string){
    if(confirm('¿Desea eliminar este registro?')){
      this.studentService.deleteStudent($id);
      this.toastr.warning('Eliminado Exitosamente','Estudiante Eliminado');
    }
  }
}
