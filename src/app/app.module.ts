import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from "ngx-owl-carousel-o";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomepageComponent,
    CarListComponent,
    IntroComponent,
    CarDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
