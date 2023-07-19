import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PayBannerComponent } from './components/pay-banner/pay-banner.component';
import { SliderItemsComponent } from './components/slider-items/slider-items.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomeComponent, CarrouselComponent, PayBannerComponent, SliderItemsComponent, CardComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
