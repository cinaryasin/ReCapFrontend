import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarBrandImage } from 'src/app/models/carBrandImage';

import { BrandService } from 'src/app/services/brand.service';
import { CarBrandImageService } from 'src/app/services/car-brand-image.service';
// @ts-ignore
import('../../../assets/js/main');


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  carbrandimages:CarBrandImage[]=[];
  
  
  
  
  constructor(private carbrandimageservice:CarBrandImageService, private branService:BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getBrandimages()
      
    })
    
   
  }

  
  getBrandimages(){
    this.carbrandimageservice.getCarBrandImages().subscribe(response=>{
      this.carbrandimages=response.data
    })
  }

 

 
}

  
  
  