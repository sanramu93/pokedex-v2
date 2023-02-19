import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { TypesPageComponent } from './types-page/types-page.component';
import { TypePageComponent } from './types-page/components/type-page/type-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypesPageComponent,
    TypePageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
