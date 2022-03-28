import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
//in the example, home=portfolio  and items=item

import{AboutComponent}from './components/pages/about/about.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import{HomeComponent}from './components/pages/home/home.component';
import { ItemsComponent } from './components/pages/items/items.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'items/:cod', component: ItemsComponent},
  {path:'buscar/:textoBusq', component: BusquedaComponent },
  {path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
