import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.component.html',
  styleUrls: ['./slider-items.component.scss'],
})
export class SliderItemsComponent implements OnInit {
  constructor() {}
  images = [62, 83];
  ngOnInit(): void {}
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
}
