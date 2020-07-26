import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  displayedColumns: string[] = ['first name', 'last name', 'city', 'country', 'actions'];
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers()
      .subscribe((data: Customer[]) => { this.customers = data; },
    );
  }

  onClick(customer) {
    this.router.navigate(['/customers', customer.id]);
  }

  delete(customer) {
    this.customerService.deleteCustomer(customer.id)
    .subscribe(() => { console.log('Successfuly Deleted'); });
  }
}
