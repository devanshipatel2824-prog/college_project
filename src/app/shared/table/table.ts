import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { StudService } from '../../service/stud-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { person } from '../../interface/interface';
import { TeacherService } from '../../service/teacher-service';

@Component({
  selector: 'app-table',
  imports: [FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

  @Input() details: person[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() view = new EventEmitter<string>();

  onView(email: string) {
    console.log('VIEW CLICKED:', email); // 🔴 DEBUG LINE
    this.view.emit(email);
  }



}
