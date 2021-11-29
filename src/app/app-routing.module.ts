import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:"", component: DepartmentComponent},
  {path:"addDepartment", component: AddDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
