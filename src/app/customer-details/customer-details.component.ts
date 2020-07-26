import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Models/Customer';
import { Invoice } from '../Models/Invoice';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId: any;
  customer: Customer;
  invoice: Invoice;
  invoiceForm: FormGroup;
  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private invoiceService: InvoiceService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.customerId = id;
    this.getCustomer();
    this.createInvoice();
  }

  createInvoice() {
    this.invoiceForm = this.fb.group({
      invoiceNumber: [''],
      total: [''],
    });
  }

  getCustomer() {
    this.customerService.getCustomer(this.customerId)
      .subscribe((data: Customer) => { this.customer = data; },
    );
  }

  addInvoiceForCustomer() {
    if (this.invoiceForm.valid) {
      this.invoice = Object.assign({}, this.invoiceForm.value);
      this.invoice.customerId = this.customerId;
      this.invoiceService.addInvoice(this.invoice).subscribe(() => { console.log('Success'); });
    }
  }

}
