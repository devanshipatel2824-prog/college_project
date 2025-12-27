import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudService } from '../../service/stud-service';
import { TeacherService } from '../../service/teacher-service';
import { FormsModule } from '@angular/forms';
import { person } from '../../interface/interface';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  //  @Input() model={
  //    name: '',
  //    phoneno: 0,
  //    email: '',
  //    address: '',
  //    gender: '',
  //  };
  @Input() model: any;
  @Input() editIndex: number | null = null;
  @Output() save = new EventEmitter<any>();


  submit() {
    this.save.emit(this.model);
    console.log(this.model);
  }
}
