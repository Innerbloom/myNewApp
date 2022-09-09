import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./calendar/calendar.component";
import {StatisticComponent} from "./statistic/statistic.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: "calendar", component: CalendarComponent},
  {path: "statistic", component: StatisticComponent},
  {path: "about", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
