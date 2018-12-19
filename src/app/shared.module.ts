import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClickOutsideDirective} from './directives/helpers/click-outside.directive';

@NgModule({
  declarations: [
      ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      ClickOutsideDirective
  ]
})
export class SharedModule { }
