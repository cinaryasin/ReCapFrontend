import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccoundService } from 'src/app/services/accound.service';
// @ts-ignore
import('../../../assets/js/main');

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private router: Router , private accound:AccoundService) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
  isAuthenticated() {
    return this.accound.isAuthenticated();
  }
}
