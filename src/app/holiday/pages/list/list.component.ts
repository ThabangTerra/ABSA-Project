import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Holiday } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

declare const M: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  holidayObs: Observable<Holiday[]>;

  constructor(private holidayService: HolidayService, private router: Router) {}

  ngOnInit(): void {
    this.holidayObs = this.holidayService.fetchAll();
  }

  ngAfterViewInit(): void {
    this.initSlider();
  }

  onClick(id: string): void {
    this.router.navigate([`/holidays/view/${id}`]);
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
