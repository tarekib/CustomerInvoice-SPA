import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'invoices', component: InvoiceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CustomerComponent, InvoiceListComponent, CustomerDetailsComponent];
