import { Component, OnInit } from '@angular/core';
import { Invoice } from '../Models/Invoice';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];
  displayedColumns: string[] = ['invoice number', 'total', 'customer'];
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
   this.loadInvoices();
  }

  loadInvoices() {
    this.invoiceService.getInvoices()
      .subscribe((data: Invoice[]) => { this.invoices = data; },
    );
  }

  // AddInvoice() {
  //   if (this.createCustomerForm.valid) {
  //     this.customer = Object.assign({}, this.createCustomerForm.value);
  //     this.customerService.addCustomer(this.customer).subscribe(() => { console.log('Success'); });
  //   }
  // }

}
