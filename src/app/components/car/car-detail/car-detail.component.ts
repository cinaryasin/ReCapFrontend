import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[];
  carDetail:CarDetail

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.setCarDetails();
    
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  


  setCarDetails() {
    this.activatedRoute.params.subscribe((param) => {
      if (param.id) {
        console.log(param.id)
        return this.getCarDetailByCarId(param.id);
      }
      return this.getCarDetails();
    });
  }
  getCarDetailByCarId(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.carDetail = response.data;
    });
  }
}
