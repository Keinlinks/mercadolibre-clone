import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { ItemCartComponent } from './item-cart/item-cart.component';

@NgModule({
  declarations: [CartComponent, ItemCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartComponent }]),
    PipesModule,
  ],
  exports: [CartComponent],
})
export class CartModule {}
