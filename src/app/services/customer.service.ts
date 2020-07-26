import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.apiUrl + 'customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  getCustomer(id): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }

  addCustomer(customer: Customer) {
    return this.http.post(this.baseUrl, customer);
  }

  deleteCustomer(id) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('customerId', id);
    return this.http.delete(this.baseUrl, {params: queryParams} );
  }
}
