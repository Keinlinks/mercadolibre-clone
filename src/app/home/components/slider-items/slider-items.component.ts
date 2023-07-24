import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item-model';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.component.html',
  styleUrls: ['./slider-items.component.scss'],
})
export class SliderItemsComponent implements OnInit {
  @Input() items: Item[] = [];
  items_copy: Item[] = [];
  @Input() seed: number = 2;
  slides: number = 1;
  constructor() {}

  ngOnInit(): void {
    this.slides = this.items.length;
    this.slides /= 5;
    this.slides = Math.ceil(this.slides);

    this.randomArray(this.items);
  }
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  randomArray(value: Item[]) {
    const n = value.length;
    for (let i = 0; i < n; i++) {
      const j = Math.floor(Math.random() * n);
      [value[i], value[j]] = [value[j], value[i]];
    }
    console.log(value);
    this.items_copy = value;
  }
}
