import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Contact } from './contact';
import { Customer } from './managercustomer/customer';
import { UniversalService } from './universal.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private unisrv: UniversalService, private httpmeth: HttpClient) { }
  baseurl = this.unisrv.baseurl;
  GetAll(): Observable<Customer[]>{
    return this.httpmeth.get(`${this.baseurl}/customers`) as Observable<Customer[]>
  }
  AddCustomer(user: Customer): Observable<Customer>{
    return this.httpmeth.post(`${this.baseurl}/customers`, user) as Observable<Customer>
  }
  DeleteCustomer(id: number): Observable<Customer>{
    return this.httpmeth.delete(`${this.baseurl}/customers/${id}`) as Observable<Customer>
  }
  AddCustomerFeedback(customerfeedback: Contact): Observable<Contact>{
    return this.httpmeth.post(`${this.baseurl}/contacts`, customerfeedback) as Observable<Contact>
  }
  GetCustomerFeedback(): Observable<Contact[]>{
    return this.httpmeth.get(`${this.baseurl}/contacts`) as Observable<Contact[]>
  }
  GetFeedbackByPK(id: string): Observable<Contact>{
    return this.httpmeth.get(`${this.baseurl}/contacts/${id}`) as Observable<Contact>
  }
  DeleteFeedBack(id: number): Observable<Contact>{
    return this.httpmeth.delete(`${this.baseurl}/contacts/${id}`) as Observable<Contact>
  }
}
