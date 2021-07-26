import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { Image } from '../../models/image.model';

declare const M: any;

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() images: Image[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCarousel();
    this.initSlider();
  }

  initCarousel() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 200,
    });
  }

  initSlider() {
    // slider
    const slider = document.querySelector('.slider');
    const i = M.Slider.init(slider, {
      indicators: true,
      height: 300,
      transition: 500,
      interval: 4000,
    });
  }
}
