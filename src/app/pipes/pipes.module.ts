import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPointPipe } from './number-point.pipe';
import { ImageLinkPipe } from './image-link.pipe';

@NgModule({
  declarations: [NumberPointPipe, ImageLinkPipe],
  imports: [CommonModule],
  exports: [NumberPointPipe, ImageLinkPipe],
})
export class PipesModule {}
