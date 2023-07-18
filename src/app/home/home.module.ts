import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PayBannerComponent } from './components/pay-banner/pay-banner.component';

@NgModule({
  declarations: [HomeComponent, CarrouselComponent, PayBannerComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
