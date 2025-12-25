import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudService } from '../../service/stud-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-table',
  imports: [FormsModule, RouterLink],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

 @Input() details: any[] = [];
   @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  router: any;
  
}
