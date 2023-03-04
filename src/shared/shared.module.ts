import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponents } from './components';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [...SharedComponents],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [...SharedComponents]
})
export class SharedModule { }
