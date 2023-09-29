import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsComponent } from './us.component';
import {UsVenueComponent} from "./us-venue/us-venue.component";
import {UsLandingComponent} from "./us-landing/us-landing.component";
import {UsWeatherComponent} from "./us-weather/us-weather.component";
import {UsChecklistComponent} from "./us-checklist/us-checklist.component";
import {UsCampingComponent} from "./us-camping/us-camping.component";

const routes: Routes = [
  { path: '', component: UsComponent, children: [
      { path: '', component: UsLandingComponent },
      { path: 'venue', component: UsVenueComponent},
      { path: 'weather', component: UsWeatherComponent},
      { path: 'camping', component: UsCampingComponent},
      { path: 'checklist', component: UsChecklistComponent},
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsRoutingModule { }
