import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
import { ExtraInfoComponent } from './components/extra-info/extra-info.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ItemPageComponent,
    PicturesComponent,
    DescriptionsComponent,
    ExtraInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', component: ItemPageComponent }]),
    PipesModule,
    NgbAlert,
  ],
  exports: [ItemPageComponent],
})
export class ItemPageModule {}
