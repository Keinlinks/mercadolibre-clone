import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
import { ExtraInfoComponent } from './components/extra-info/extra-info.component';

@NgModule({
  declarations: [
    ItemPageComponent,
    PicturesComponent,
    DescriptionsComponent,
    ExtraInfoComponent,
  ],
  imports: [CommonModule],
  exports: [ItemPageComponent],
})
export class ItemPageModule {}
