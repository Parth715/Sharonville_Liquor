import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/expense';
import { ExpenseService } from 'src/app/expense.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private expsrv: ExpenseService, private httpmeth: HttpClient, private Route: ActivatedRoute, private router: Router) { }

  Exp!: Expense
  ngOnInit(): void {
    this.reload();
  }
  reload(): void{
    let id= this.Route.snapshot.params["id"];
    this.expsrv.GetByPk(id).subscribe({
      next: res => this.Exp = res,
      error: err => console.log(err)
    });
  }
  save(): void{
    let id= this.Route.snapshot.params["id"];
    this.expsrv.save(id, this.Exp).subscribe({
      next: res => {this.Exp = res
                    this.router.navigate(["/expense"])},
      error: err => console.log(err)
    });
  }

}
