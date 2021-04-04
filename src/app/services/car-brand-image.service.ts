import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarBrandImage } from '../models/carBrandImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarBrandImageService {
  apiUrl="https://localhost:44398/api/"
  constructor(private httpClient:HttpClient) { }

  getCarBrandImages():Observable<ListResponseModel<CarBrandImage>>{
    let newPath=this.apiUrl+"carbrandimages/getall"
    return this.httpClient.get<ListResponseModel<CarBrandImage>>(newPath);
  }
  

}





  
  
 
