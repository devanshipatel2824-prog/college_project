import { Injectable } from '@angular/core';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private teacher = [
    { name: 'parul', phoneno: 5362147896, email: 'parul@gmail.com', address: 'vapi', gender: 'female' },
    { name: 'jayesh', phoneno: 4963214789, email: 'jayesh@gmail.com', address: 'bharuch', gender: 'male' },
  ]
showForm=false;

  model = { name: '', phoneno: 0, email: '', address: '', gender: '' };
  editIndex: number | null = null;

  addTeacher(){
    this.model={ name:'',phoneno:0,email:'',address:'',gender:'' };
    this.showForm=true;
  }
editTeacher(index: number) {
    this.editIndex = index;                      // FIX
    this.model = { ...this.teacher[index] };    // copy data
    this.showForm = true;
  }
  //save the data of stduent
  saveTeacher(teacherValue: any) {
    if (this.editIndex !== null) {
      this.teacher[this.editIndex] = { ...teacherValue }; // UPDATE
    } else {
      this.teacher.push({ ...teacherValue });             // ADD
    }
    this.editIndex = null;
    this.showForm = false;
  }
  // Delete student
  deleteteacher(index: number) {
    this.teacher.splice(index, 1);
  }

  getTeacher() {
    return this.teacher;
  }
getTeacherByEmail(email: string) {
    return this.teacher.find(teacher => teacher.email === email);
  }
}
