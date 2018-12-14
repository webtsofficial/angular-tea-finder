import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/sites/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teaFinder',
    loadChildren: './components/sites/tea-finder/tea-finder.module#TeaFinderModule'
  },
  {
    path: 'data-security',
    loadChildren: './components/sites/data-security/data-security.module#DataSecurityModule'
  },
  {
    path: 'impress',
    loadChildren: './components/sites/impress/impress.module#ImpressModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
