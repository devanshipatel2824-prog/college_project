import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../service/teacher-service';

@Component({
  selector: 'app-teacher-detail',
  imports: [],
  templateUrl: './teacher-detail.html',
  styleUrl: './teacher-detail.css',
})
export class TeacherDetail implements OnInit {
  email!: string;
  private route = inject(ActivatedRoute);
  // constructor(public teacherService: TeacherService) { }
  private teacherService = inject(TeacherService);
  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') || '';
    // console.log(this.name);
  }
  get teacherDetails() {
    return this.teacherService.getTeacherByEmail(this.email);
  }
  protected readonly router = inject(Router);
  gotohome() {
    this.router.navigate(['teacher']);
  }
}
