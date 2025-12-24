import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudService } from '../service/stud-service';
import { FormsModule } from '@angular/forms';
import { Table } from "../shared/table/table";
import { Modal } from "../shared/modal/modal";

@Component({
  selector: 'app-student',
  imports: [FormsModule, Table, Modal],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  students: any[] = [];
  service: any;

  constructor(public studService: StudService) { }

  ngOnInit(): void {
    this.students = this.studService.getStudent();


  }

  protected readonly router = inject(Router);
  gotohome() {
    this.router.navigate(['dashboard']);
  }
saveteacher(studentValue:any){
  console.log(studentValue);
  this.studService.saveStudets(studentValue)
}
}
