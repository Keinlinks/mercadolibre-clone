import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from '../services/items-data.service';
import { Item } from '../models/item-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  constructor(private service: ItemsDataService) {
    this.items = service.getItems();
  }

  ngOnInit(): void {}
}
