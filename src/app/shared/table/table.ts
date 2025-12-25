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
   @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

}
