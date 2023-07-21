import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item-model';
import { ItemsDataService } from 'src/app/services/items-data.service';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.component.html',
  styleUrls: ['./slider-items.component.scss'],
})
export class SliderItemsComponent implements OnInit {
  items: Item[] = [];
  constructor(private service: ItemsDataService) {
    this.items = service.getItems();
  }
  images = [62, 0];
  ngOnInit(): void {}
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
}
