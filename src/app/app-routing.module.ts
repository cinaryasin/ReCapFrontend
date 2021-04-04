import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBrandListComponent } from './components/car/car-brand-list/car-brand-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:brandId', component: CarListComponent },

  

  { path: '**', component: IntroComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
