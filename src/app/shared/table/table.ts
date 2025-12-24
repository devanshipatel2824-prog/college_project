import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudService } from '../../service/stud-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
 @Input() details: any[] = [];
 
constructor(public studService: StudService) {}

  addStudent() {
    this.studService.addStudent();
  }

  editStudent(index: number) {
    this.studService.editStudent(index);
  }

  deleteStudent(index: number) {
    this.studService.deleteStudent(index);
  }
}
