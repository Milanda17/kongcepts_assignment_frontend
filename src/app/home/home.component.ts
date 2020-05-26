import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees: Observable<Employee[]>;
  isLoggedIn = false;

  constructor(private employeeService: EmployeeService,
    private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.reloadData();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

  }

  reloadData(){
    this.employees = this.employeeService.getEmployeeList();
  }

}
