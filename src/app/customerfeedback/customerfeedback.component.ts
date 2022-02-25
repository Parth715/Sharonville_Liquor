import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CustomerService } from '../customer.service';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-customerfeedback',
  templateUrl: './customerfeedback.component.html',
  styleUrls: ['./customerfeedback.component.css']
})
export class CustomerfeedbackComponent implements OnInit {

  constructor(private unisrv: UniversalService, private custsrv: CustomerService) { }

  user = this.unisrv.loggedinuser;
  CustomerFB!: Contact[];
  ngOnInit(): void {
    this.custsrv.GetCustomerFeedback().subscribe({
      next: res => this.CustomerFB = res,
      error: err => console.log(err)
    });
  }

}
