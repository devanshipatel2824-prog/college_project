import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudService } from '../../service/stud-service';
import { TeacherService } from '../../service/teacher-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [CommonModule,  FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
 @Input() model={
   name: '',
   phoneno: 0,
   email: '',
   address: '',
   gender: '',
 };
  @Input() editIndex:number|null = null;
  @Output() save = new EventEmitter<any>();
@Output() edit=new EventEmitter<any>();
@Input() showForm: boolean = false;
  // constructor(public s:StudService, public t:TeacherService){}
  submit(){
    this.save.emit(this.model);
    console.log(this.model);
  }
editdata(){
  this.edit.emit(this.model);
}
 close() {
    this.showForm = false;
  }
}
