import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { StudService } from '../service/stud-service';
import { TeacherService } from '../service/teacher-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  studentcount = 0;
  teachercount=0;
  constructor(private sservice: StudService, private tservice: TeacherService) {
    this.studentcount = this.sservice.getstudentcount(); 
    this.teachercount=this.tservice.getteachercount();
  }

}
