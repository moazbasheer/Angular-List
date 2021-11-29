import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  departmentList:any = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getAllDepartments().subscribe(data=>{
      this.departmentList = data;
    });
  }

  deleteItem(item:any) {
    this.service.deleteDepartment(item.id).subscribe(data=>{
      console.log(data);
      this.refreshDepList();
    });
  }

}
