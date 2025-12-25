import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Student } from './student/student';
import { Teacher } from './teacher/teacher';

export const routes: Routes = [
{
    path:'dashboard',
    component:Dashboard
},
{
    path:'student',
    component:Student
},
{
    path:'teacher',
    component:Teacher
},
{
   path:'student/:email',
    loadComponent:()=>import('./student/student-detail/student-detail').then(m=>m.StudentDetail)
},
{
    path:'teacher/:email',
    loadComponent:()=>import('./teacher/teacher-detail/teacher-detail').then(m=>m.TeacherDetail)
},
{
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
}
];
