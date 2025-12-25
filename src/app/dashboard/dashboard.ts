import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { StudService } from '../service/stud-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
studentcount=0;
constructor(private sservice:StudService){
    this.studentcount=this.sservice.getstudentcount();
}
}
