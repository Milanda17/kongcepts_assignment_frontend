import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/';
  private headers_object;
 

  constructor(private http:HttpClient,private tokenStorageService: TokenStorageService){}
 
  getEmployeeList(): Observable<any>{
      return this.http.get(`${this.baseUrl}`+'employeeList');
  }

}
