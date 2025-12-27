import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../service/teacher-service';
import { Table } from "../shared/table/table";
import { Modal } from "../shared/modal/modal";
import { person } from '../interface/interface';

@Component({
  selector: 'app-teacher',
  imports: [Table, Modal],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher {
  teacher: person[] = [];
  // studService: person;

  constructor(public teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacher = this.teacherService.getTeacher();
  }
  protected readonly router = inject(Router);
  gotodashboard() {
    this.router.navigate(['dashboard']);
  }
  savesteacher(teacherValue: any) {
    this.teacherService.saveTeacher(teacherValue);
  }

  editdata(index: number) {
    this.teacherService.editTeacher(index);
  }
  viewteacher(email: string) {
    console.log('NAVIGATING TO:', email);
    this.router.navigate(['teacher-detail', email]);
  }
}
