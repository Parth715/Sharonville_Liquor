import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './managercustomer/customer';
import { UniversalService } from './universal.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private unisrv: UniversalService, private httpmeth: HttpClient) { }
  baseurl = this.unisrv.baseurl;
  GetAll(): Observable<Customer[]>{
    return this.httpmeth.get(`${this.baseurl}/customers`) as Observable<Customer[]>
  }
}
