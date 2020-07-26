import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../Models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl = environment.apiUrl + 'invoice';
  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseUrl);
  }

  addInvoice(invoice: Invoice) {
    return this.http.post(this.baseUrl, invoice);
  }
}
