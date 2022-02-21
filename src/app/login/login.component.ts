import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private unisrv: UniversalService, private router: Router) { }

  username!:string;
  password!:string;
  ngOnInit(): void {
  }
  USER(): void{
    this.unisrv.User(this.username, this.password).subscribe({
      next: res => this.unisrv.loggedinuser = res,
      error: err => console.log(err)
    });
  }

}
