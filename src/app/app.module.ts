import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarBrandListComponent } from './components/car/car-brand-list/car-brand-list.component';
import { IntroComponent } from './components/intro/intro.component';


@NgModule({
  declarations: [AppComponent, NaviComponent, HomepageComponent, CarListComponent, CarBrandListComponent, IntroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
