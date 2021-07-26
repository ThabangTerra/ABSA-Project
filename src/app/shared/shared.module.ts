import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailsComponent } from './components/details/details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const COMPONENTS = [
  CardComponent,
  CarouselComponent,
  DetailsComponent,
  NavbarComponent,
  LoaderComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
