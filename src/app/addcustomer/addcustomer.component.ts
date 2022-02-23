import { Component, OnInit } from '@angular/core';
import { UniversalService } from '../universal.service';
import { CustomerService } from '../customer.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Customer } from '../managercustomer/customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private custsrv: CustomerService, private unisrv: UniversalService, private router: Router) { }

  customer: Customer = new Customer;
  ngOnInit(): void {
  }
  ENTER(): void{
    this.custsrv.AddCustomer(this.customer).subscribe({
      next: res => {console.log(res)
                    this.router.navigate(["/customers"])},
      error: err => console.log(err)
    });
  }

}
