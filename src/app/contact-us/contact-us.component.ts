import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CustomerService } from '../customer.service';
import { Customer } from '../managercustomer/customer';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private unisrv: UniversalService, private custsrv: CustomerService) { }

  CustomerFB!: Contact;
  ngOnInit(): void {
  }

  CreateFB(): void{
    this.custsrv.AddCustomerFeedback(this.CustomerFB).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}
