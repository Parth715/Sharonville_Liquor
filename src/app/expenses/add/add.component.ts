import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/expense';
import { ExpenseService } from 'src/app/expense.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Exp: Expense = new Expense;
  constructor(private expsrv: ExpenseService, private Route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }

  save(): void{
    this.expsrv.create(this.Exp).subscribe({
      next: res => {this.router.navigate(["/expense"])},
      error: err => console.log(err)
    });
  }
}
