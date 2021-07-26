import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Holiday } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  holiday: Holiday;
  sub: Subscription;

  constructor(
    private holidayService: HolidayService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHotel();
  }

  ngOnDestroy = () => this.sub ?? this.sub.unsubscribe();

  getHotel(): void {
    const state = this.route.snapshot.paramMap.get('id');
    this.sub = this.holidayService
      .fetch(state)
      .subscribe((h) => (this.holiday = h));
  }
}
