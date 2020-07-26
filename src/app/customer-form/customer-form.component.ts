import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  createCustomerForm: FormGroup;
  customer: Customer;
  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {
    this.createCustomer();
  }

  createCustomer() {
    this.createCustomerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  AddCustomer() {
    if (this.createCustomerForm.valid) {
      this.customer = Object.assign({}, this.createCustomerForm.value);
      this.customerService.addCustomer(this.customer).subscribe(() => { console.log('Success'); });
    }
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
