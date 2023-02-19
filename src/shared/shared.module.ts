import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SectionLinkComponent } from './section-link/section-link.component';
import { TypeTagComponent } from './type-tag/type-tag.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    LayoutComponent,
    SectionLinkComponent,
    TypeTagComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    LayoutComponent,
    SectionLinkComponent,
    TypeTagComponent,
    PokemonCardComponent
  ]
})
export class SharedModule { }
