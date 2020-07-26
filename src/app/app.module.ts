import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      CustomerDetailsComponent,
      routingComponents,
      CustomerFormComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule
   ],
   providers: [
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
