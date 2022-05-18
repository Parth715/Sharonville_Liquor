import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

menus: Menu[] = [
  new Menu("Customer Feedback", "/customerfeedback"),
  new Menu("Expenses", "/expense")
]

  constructor() { }

  ngOnInit(): void {
  }

}
