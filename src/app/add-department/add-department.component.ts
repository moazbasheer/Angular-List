import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentList:any;
  departmentName:any;
  dep: FormData = new FormData();
  constructor(private service:SharedService, private router: Router) { 
    
  }
  
  ngOnInit(): void {
    this.refreshDepList();
  }

  addDepartment() {
    this.dep.append("name", this.departmentName);
    this.service.addDepartment(this.dep).subscribe(data => {
      this.refreshDepList();
      this.router.navigate(['']);
    });
  }
  
  refreshDepList() {
    this.service.getAllDepartments().subscribe(data=>{
      this.departmentList = data;
    });
  }

}
