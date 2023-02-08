import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SectionLinkComponent } from './section-link/section-link.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    LayoutComponent,
    SectionLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    LayoutComponent,
    SectionLinkComponent
  ]
})
export class SharedModule { }
