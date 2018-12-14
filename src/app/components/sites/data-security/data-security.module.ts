import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSecurityRoutingModule } from './data-security-routing.module';
import { DataSecurityComponent } from './data-security.component';

@NgModule({
  declarations: [DataSecurityComponent],
  imports: [
    CommonModule,
    DataSecurityRoutingModule
  ]
})
export class DataSecurityModule { }
