import { Injectable } from '@angular/core';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class StudService {
  private students = [
    { name: 'devanshi', phoneno: 8141615559, email: 'devanshi@gmail.com', address: 'dungri reliya faliya', gender: 'female' },
    { name: 'dhyey', phoneno: 7896354159, email: 'dhyey@gmail.com', address: 'valsad', gender: 'male' },
  ]
  showForm = false;
  model = { name: '', phoneno: 0, email: '', address: '', gender: '' };
  editIndex: number | null = null;

  //add the student
  addStudent() {
    this.model = { name: '', phoneno: 0, email: '', address: '', gender: '' };
    this.showForm = true;
  }
  // saveStudets(studentValue:any){
  //    this.students.push(studentValue);
  //   }
  //edit the student
  editStudent(index: number) {
    this.editIndex = index;                      // FIX
    this.model = { ...this.students[index] };    // copy data
    this.showForm = true;
  }
  //save the data of stduent
  saveStudent(studentValue: any) {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = { ...studentValue }; // UPDATE
    } else {
      this.students.push({ ...studentValue });             // ADD
    }
    this.editIndex = null;
    this.showForm = false;
  }
  // Delete student
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }









  getStudent() {
    return this.students;
  }
}
