import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { ViewComponent } from './pages/view/view.component';
import { HotelPipe } from './pipes/hotel.pipe';

@NgModule({
  declarations: [MainComponent, ListComponent, HotelPipe, ViewComponent],
  imports: [CommonModule, HotelRoutingModule, SharedModule],
})
export class HotelModule {}
