import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Contact } from '../contact';
import { CustomerService } from '../customer.service';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {

  constructor(private unisrv: UniversalService, private custsrv: CustomerService, private route: ActivatedRoute) { }

  feedback!: Contact;
  user = this.unisrv.loggedinuser;
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.custsrv.GetFeedbackByPK(id).subscribe({
      next: res => this.feedback = res,
      error: err => console.log(err)
    });
  }

}
