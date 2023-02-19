import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesPageComponent } from './types-page/types-page.component';
import { HomeComponent } from './home/home.component';
import { TypePageComponent } from './types-page/components/type-page/type-page.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'types', 
    component: TypesPageComponent
  },
  {
    path: 'types/:id', 
    component: TypePageComponent
  },
  {
    path: '**', 
    component: HomeComponent
  },
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
