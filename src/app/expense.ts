import { DecimalPipe } from "@angular/common";

export class Expense {
    id: number = 0;
    name: String = "";
    date: String = "";
    in!: DecimalPipe;
    out!: DecimalPipe;
}
