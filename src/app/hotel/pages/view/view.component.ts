import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/shared/models/hotel.model';

import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit, OnDestroy {
  hotel: Hotel;
  sub: Subscription;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHotel();
  }

  ngOnDestroy = () => this.sub ?? this.sub.unsubscribe();

  getHotel(): void {
    const state = this.route.snapshot.paramMap.get('id');
    this.sub = this.hotelService
      .fetch(state)
      .subscribe((h) => (this.hotel = h));
  }
}
