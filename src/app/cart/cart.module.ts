import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartComponent }]),
    PipesModule,
  ],
  exports: [CartComponent],
})
export class CartModule {}
