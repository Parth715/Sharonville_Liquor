import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  Flow!: Expense[];
  constructor(private expsrv: ExpenseService, private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void{
    this.expsrv.Get().subscribe({
      next: res => this.Flow = res,
      error: err => console.log(err)
    });
  }
  delete(): void{
    let id= this.Route.snapshot.params["id"];
    this.expsrv.delete(id).subscribe({
      next: res => this.reload(),
      error: err => console.log(err)
    });
  }
}
