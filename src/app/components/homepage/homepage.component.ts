import { Component, OnInit } from '@angular/core';
import { BrandDetail } from 'src/app/models/brandDetail';
import { CarBrandImageService } from 'src/app/services/car-brand-image.service';

// @ts-ignore
import('../../../assets/js/main');

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  branddetail: BrandDetail[];

  constructor(private carbrandimageservice: CarBrandImageService) { }

  ngOnInit(): void {
    this.getBrandDetails()
  }

  getBrandDetails() {
    this.carbrandimageservice.getBrandDetail().subscribe(r => {
      this.branddetail = r.data
    })
  }
}