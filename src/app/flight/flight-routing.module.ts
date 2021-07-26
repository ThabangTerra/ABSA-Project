import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookFlightComponent } from './pages/book-flight/book-flight.component';
import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: BookFlightComponent },
      { path: 'results', component: ListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingModule {}
