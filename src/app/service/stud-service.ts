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
model = { name:'', phoneno:0, email:'', address:'', gender:'' };
editIndex: number | null = null;


  addStudent(){
    this.model={ name:'',phoneno:0,email:'',address:'',gender:'' };
    this.showForm=true;
  }
// saveStudets(studentValue:any){
//    this.students.push(studentValue);
//   }
editStudent(index: number) {
    this.editIndex !== null;
    this.model = { ...this.students[index] }; // copy data to form
    this.showForm = true;
  
  }

  // Save form data (add or update)
  saveStudent(studentValue: any) {
    if(this.editIndex !== null) {
      this.students[this.editIndex] = studentValue; // update existing record
    } else {
      this.students.push(studentValue);             // add new record
    }
    this.showForm = false; // close modal
  }

  // Delete student
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }









  getStudent() {
    return this.students;
  }
}
