import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { Totalexpense } from '../totalexpense';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  Flow!: Expense[];
  TotalExp!: Totalexpense;
  constructor(private expsrv: ExpenseService, private Route: ActivatedRoute, private unisrv: UniversalService, private router: Router) { }

  ngOnInit(): void {
    if(this.unisrv.loggedinuser == undefined){
      this.router.navigate(["/login"]);
    }
    this.reload();
  }

  reload(): void{
    this.expsrv.Get().subscribe({
      next: res => {this.Flow = res
        this.expsrv.totalget().subscribe({
          next: res => this.TotalExp = res,
          error: err => console.log(err)
        });},
      error: err => console.log(err)
    });
  }
  delete(id:number): void{
    this.expsrv.delete(id).subscribe({
      next: res =>{console.log(res)
                  this.reload()},
      error: err => console.log(err)
    });
  }
}
