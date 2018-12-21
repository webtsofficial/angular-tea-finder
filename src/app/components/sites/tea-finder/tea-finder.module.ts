import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaFinderRoutingModule } from './tea-finder-routing.module';
import { TeaFinderComponent } from './tea-finder.component';
import {SharedModule} from '../../../shared.module';
import {CheckboxComponent} from '../../inputs/checkbox/checkbox.component';

@NgModule({
  declarations: [
      TeaFinderComponent,
      CheckboxComponent
  ],
  imports: [
    CommonModule,
    TeaFinderRoutingModule,
    SharedModule
  ]
})
export class TeaFinderModule { }
