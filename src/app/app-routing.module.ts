import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/add', component: CustomerFormComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'invoices', component: InvoiceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CustomersListComponent, InvoiceListComponent, CustomerDetailsComponent, CustomerFormComponent];
