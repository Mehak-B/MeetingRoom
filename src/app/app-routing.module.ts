import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { auth } from './auth.guard';
import { BookingPageComponent } from './components/booking-page/booking-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'booking-page', component:BookingPageComponent, canActivate:[auth]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
