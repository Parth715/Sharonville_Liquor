import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from './expense';
import { UniversalService } from './universal.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private unisrv: UniversalService, private httpmeth: HttpClient) { }
  baseurl = this.unisrv.baseurl;
  Get(): Observable<Expense[]>{
    return this.httpmeth.get(`${this.baseurl}/expenses`) as Observable<Expense[]>
  }
  GetByPk(id: number): Observable<Expense>{
    return this.httpmeth.get(`${this.baseurl}/expenses/${id}`) as Observable<Expense>
  }
  save(id: string, exp: Expense): Observable<Expense>{
    return this.httpmeth.put(`${this.baseurl}/expenses/${id}`, exp) as Observable<Expense>
  }
  delete(id: string): Observable<Expense>{
    return this.httpmeth.delete(`${this.baseurl}/expenses/${id}`) as Observable<Expense>
  }
}
