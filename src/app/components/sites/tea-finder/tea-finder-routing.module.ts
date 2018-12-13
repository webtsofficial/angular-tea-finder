import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeaFinderComponent} from './tea-finder.component';

const routes: Routes = [
  {
    path: '',
    component: TeaFinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaFinderRoutingModule { }
