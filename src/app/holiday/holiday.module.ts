import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HolidayRoutingModule } from './holiday-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { ViewComponent } from './pages/view/view.component';

@NgModule({
  declarations: [ListComponent, MainComponent, ViewComponent],
  imports: [CommonModule, HolidayRoutingModule, SharedModule],
})
export class HolidayModule {}
