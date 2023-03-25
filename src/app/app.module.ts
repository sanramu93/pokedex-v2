import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { TypesPageComponent } from './types-page/types-page.component';
import { TypePageComponent } from './types-page/components/type-page/type-page.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonDetailAboutComponent } from './pokemon-detail/components/pokemon-detail-about/pokemon-detail-about.component';
import { PokemonDetailStatusComponent } from './pokemon-detail/components/pokemon-detail-status/pokemon-detail-status.component';
import { PokemonDetailMovesComponent } from './pokemon-detail/components/pokemon-detail-moves/pokemon-detail-moves.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypesPageComponent,
    TypePageComponent,
    PokemonDetailComponent,
    PokemonDetailAboutComponent,
    PokemonDetailStatusComponent,
    PokemonDetailMovesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
