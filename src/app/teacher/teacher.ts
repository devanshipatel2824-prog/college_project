import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../service/teacher-service';
import { Table } from "../shared/table/table";
import { Modal } from "../shared/modal/modal";

@Component({
  selector: 'app-teacher',
  imports: [Table, Modal],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher {
  teacher: any[] = [];
  studService: any;

  constructor(public teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacher = this.teacherService.getTeacher();
  }
  protected readonly router = inject(Router);
  gotodashboard() {
    this.router.navigate(['dashboard']);
  }
saveteacher(teacherValue:any){
  console.log(teacherValue);
  this.teacherService.saveTeacher(teacherValue)
}
}
