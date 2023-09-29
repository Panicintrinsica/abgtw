import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsRoutingModule } from './us-routing.module';
import { UsComponent } from './us.component';
import { UsLandingComponent } from './us-landing/us-landing.component';
import { UsVenueComponent } from './us-venue/us-venue.component';
import { UsWeatherComponent } from './us-weather/us-weather.component';
import { UsCampingComponent } from './us-camping/us-camping.component';
import { UsChecklistComponent } from './us-checklist/us-checklist.component';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UsComponent,
    UsLandingComponent,
    UsVenueComponent,
    UsWeatherComponent,
    UsCampingComponent,
    UsChecklistComponent
  ],
    imports: [
        CommonModule,
        UsRoutingModule,
        RouterLink,
        FormsModule,
      ReactiveFormsModule
    ]
})
export class UsModule { }
