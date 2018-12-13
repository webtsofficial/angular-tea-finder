import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaFinderRoutingModule } from './tea-finder-routing.module';
import { TeaFinderComponent } from './tea-finder.component';

@NgModule({
  declarations: [TeaFinderComponent],
  imports: [
    CommonModule,
    TeaFinderRoutingModule
  ]
})
export class TeaFinderModule { }
