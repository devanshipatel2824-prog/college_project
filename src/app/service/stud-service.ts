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
 showForm=false;

  model={ name:'',phoneno:'',email:'',address:'',gender:'' };

  addStudent(){
    this.model={ name:'',phoneno:'',email:'',address:'',gender:'' };
    this.showForm=true;
  }

  // ssaveStudent() {
  //   this.students.push({ ...this.model });
  //   this.showForm = false;

  //   // Reset model if needed
  //   this.model = { name: '', phoneno: '', email: '', address: '', gender: '' };
saveStudets(studentValue:any){
   this.students.push(studentValue);
  }
  getStudent() {
    return this.students;
  }
}
