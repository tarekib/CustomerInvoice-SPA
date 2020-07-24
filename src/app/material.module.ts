import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  exports: [
    BrowserAnimationsModule,
    MatTableModule
  ]
})
export class MaterialModule { }
