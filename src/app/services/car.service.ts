import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44398/api/';
  constructor(private httpClient: HttpClient) {}


  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarById(carId: number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarbyid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrand?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  
}


  


