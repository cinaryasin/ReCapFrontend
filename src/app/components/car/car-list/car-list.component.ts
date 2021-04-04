import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { CarBrandImage } from 'src/app/models/carBrandImage';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { CarBrandImageService } from 'src/app/services/car-brand-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
// @ts-ignore
import('../../../../assets/js/main');

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carDetails: CarDetail[];
  carBrandImages:CarBrandImage[];
  colors: Color[];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carBrandImageService: CarBrandImageService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getCarBrandImage();
    this.setCars();
    this.getColors();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarBrandImage(){
    this.carBrandImageService.getCarBrandImages().subscribe(response=>{
      this.carBrandImages=response.data
    })
  }

  getColors(){
    this.colorService.getColor().subscribe(response => {
      this.colors = response.data
    })
  }

  setCars() {
    this.activatedRoute.params.subscribe((param) => {
      if (param.brandId) {
        console.log(param.brandId)
        return this.getCarDetailByBrandId(param.brandId);
      }
      return this.getCarDetails();
    });
  }

  getCarDetailByBrandId(brandId: number) {
    this.carService.getCarDetailByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
