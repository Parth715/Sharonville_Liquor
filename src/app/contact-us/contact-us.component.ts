import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { CustomerService } from '../customer.service';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private unisrv: UniversalService, private custsrv: CustomerService, private router: Router) { }

  CustomerFB: Contact = new Contact;
  ngOnInit(): void {
  }

  CreateFB(): void{
    this.custsrv.AddCustomerFeedback(this.CustomerFB).subscribe({
      next: res => {console.log(res)
                    this.router.navigate(["/login"])},
      error: err => console.log(err)
    });
  }
}
