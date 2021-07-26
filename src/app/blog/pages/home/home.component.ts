import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 400,
      transition: 500,
      interval: 4000,
    });

    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});
  }
}
