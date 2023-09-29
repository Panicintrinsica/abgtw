import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'us', loadChildren: () => import('./us/us.module').then(m => m.UsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
