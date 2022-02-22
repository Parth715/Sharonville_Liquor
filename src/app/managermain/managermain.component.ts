import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalService } from '../universal.service';
import { User } from '../user';


@Component({
  selector: 'app-managermain',
  templateUrl: './managermain.component.html',
  styleUrls: ['./managermain.component.css']
})
export class ManagermainComponent implements OnInit {

  constructor(private unisrv: UniversalService, private router: Router, private datepipe: DatePipe) { }
  user: User = this.unisrv.loggedinuser
  currentDateTime: number = Date.now();
  ngOnInit(): void {
    if(this.user == undefined || this.user.admin == false){
      this.router.navigate(["/login"])
    }
    setInterval(() => {
      this.currentDateTime = Date.now();
      console.log(this.currentDateTime);
    }, 1000);
  }
  
}
