import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { ColorAddComponent } from './components/color-add/color-add.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:brandId', component: CarListComponent },
  { path: 'cardetail/:carId', component:CarDetailComponent},
  { path: 'color/:colorId', component:CarListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: "colorAdd", component:ColorAddComponent},


  

  { path: '**', component: IntroComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
