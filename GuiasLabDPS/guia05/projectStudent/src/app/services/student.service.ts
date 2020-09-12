import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { from } from 'rxjs';

import { Student } from '../models/student';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentList: AngularFireList<any>;
  selectedStudent: Student = new Student();
  constructor(private firebase: AngularFireDatabase) {}

  getStudents() {
    return (this.studentList = this.firebase.list('students'));
  }

  insertStudent(student: Student) {
    this.studentList.push({
      name: student.name,
      lastname: student.lastname,
      age: student.age,
      address: student.address,
      phone: student.phone,
      email: student.email,
    });
  }
  updateStudent(student: Student) {
    this.studentList.update(student.$id, {
      name: student.name,
      lastname: student.lastname,
      age: student.age,
      address: student.address,
      phone: student.phone,
      email: student.email,
    });
  }
  deleteStudent($id: string) {
    this.studentList.remove($id);
  }
}
