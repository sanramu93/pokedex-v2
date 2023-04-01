import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponents } from './components';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedPipes } from './pipes';

@NgModule({
  declarations: [
    ...SharedComponents,
    ...SharedPipes,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ...SharedComponents,
    ...SharedPipes
  ]
})
export class SharedModule { }
