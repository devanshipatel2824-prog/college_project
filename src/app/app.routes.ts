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
// {
//     path:'',
//     redirectTo:'dashboard',
//     pathMatch:'full'
// }
];
