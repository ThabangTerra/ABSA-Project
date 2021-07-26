import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/shared/models/hotel.model';

import { HotelService } from '../../services/hotel.service';

declare const M: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  hotelObs: Observable<Hotel[]>;

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {
    this.hotelObs = this.hotelService.fetchAll();
  }

  ngAfterViewInit(): void {
    this.initSlider();
  }

  onClick(id: string): void {
    this.router.navigate([`/hotels/view/${id}`]);
  }

  initSlider() {
    // slider
    const slider = document.querySelector('.slider');
    const i = M.Slider.init(slider, {
      indicators: false,
      height: 400,
      transition: 500,
      interval: 4000,
    });
  }
}
