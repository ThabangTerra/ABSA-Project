import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./hotel/hotel.module').then((m) => m.HotelModule),
  },
  {
    path: 'hotels',
    loadChildren: () =>
      import('./hotel/hotel.module').then((m) => m.HotelModule),
  },
  {
    path: 'holidays',
    loadChildren: () =>
      import('./holiday/holiday.module').then((m) => m.HolidayModule),
  },
  {
    path: 'flights',
    loadChildren: () =>
      import('./flight/flight.module').then((m) => m.FlightModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.module').then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
