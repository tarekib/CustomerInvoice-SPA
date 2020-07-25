import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId: any;
  customer: Customer;
  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.customerId = id;
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomer(this.customerId)
    .subscribe((data: Customer) => {this.customer = data; },
    );
  }

}
