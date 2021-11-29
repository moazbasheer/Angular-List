import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiUrl:string = "http://localhost:8000/api/";
  constructor(private _HttpClient:HttpClient) { }

  getAllDepartments(): Observable<any> {
    return this._HttpClient.get(this.apiUrl + 'department');
  }
  addDepartment(val:any):Observable<any> {
    return this._HttpClient.post(this.apiUrl + 'department', val);
  }

  updateDepartment(val:any):Observable<any> {
    return this._HttpClient.put(this.apiUrl + 'department', val);
  }

  deleteDepartment(val:any):Observable<any> {
    return this._HttpClient.delete(this.apiUrl + 'department/' + val);
  }
}
