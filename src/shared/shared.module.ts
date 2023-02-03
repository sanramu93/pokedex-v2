import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
