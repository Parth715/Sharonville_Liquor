import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { UniversalService } from '../universal.service';
import { Customer } from './customer';

@Component({
  selector: 'app-managercustomer',
  templateUrl: './managercustomer.component.html',
  styleUrls: ['./managercustomer.component.css']
})
export class ManagercustomerComponent implements OnInit {

  customers!: Customer[];
  constructor(private custsrv: CustomerService, private unisrv: UniversalService, private router: Router) { }

  user = this.unisrv.loggedinuser;
  ngOnInit(): void {
    if(this.user == undefined || this.user.admin == false){
      this.router.navigate(["/login"]);
    }
    this.update();
  }
  update(): void{
    this.custsrv.GetAll().subscribe({
      next: res => this.customers = res,
      error: err => console.log(err)
    });
  }

}
