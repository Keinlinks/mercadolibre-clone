import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PayBannerComponent } from './components/pay-banner/pay-banner.component';
import { SliderItemsComponent } from './components/slider-items/slider-items.component';
import { CardComponent } from './components/card/card.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DisneySectionComponent } from './components/disney-section/disney-section.component';
import { RouterModule } from '@angular/router';
import { NumberPointPipe } from '../pipes/number-point.pipe';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent,
    PayBannerComponent,
    SliderItemsComponent,
    CardComponent,

    DisneySectionComponent,
  ],
  imports: [CommonModule, NgbCarouselModule, RouterModule, PipesModule],
  exports: [HomeComponent],
})
export class HomeModule {}
