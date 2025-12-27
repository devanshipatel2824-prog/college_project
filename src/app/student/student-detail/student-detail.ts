import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudService } from '../../service/stud-service';

@Component({
  selector: 'app-student-detail',
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail implements OnInit {
  email!: string;
  private route = inject(ActivatedRoute);
  private studentService = inject(StudService);

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') || '';
    // console.log(this.name);
  }
  get studentDetails() {
    return this.studentService.getStudentByEmail(this.email);
  }
  protected readonly router = inject(Router);
  gotohome() {
    this.router.navigate(['student']);
  }
}
