import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-managermain',
  templateUrl: './managermain.component.html',
  styleUrls: ['./managermain.component.css']
})
export class ManagermainComponent implements OnInit {

  constructor(private unisrv: UniversalService, private router: Router) { }
  user = this.unisrv.loggedinuser

  ngOnInit(): void {
    if(this.user.admin == false){
      this.router.navigate(["/main"])
    }
  }

}
