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

  model={ name:'',phoneno:'',email:'',address:'',gender:'' };

  addTeacher(){
    this.model={ name:'',phoneno:'',email:'',address:'',gender:'' };
    this.showForm=true;
  }
 saveTeacher(teacherValue:any){
   this.teacher.push(teacherValue);
  }

  getTeacher() {
    return this.teacher;
  }
}
