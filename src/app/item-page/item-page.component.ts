import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from '../services/items-data.service';
import { Item } from '../models/item-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent {
  item!: Item;
  idProduct: any;
  constructor(
    private service: ItemsDataService,
    private route: ActivatedRoute
  ) {
    this.idProduct = this.route.snapshot.paramMap.get('id') ?? 0;
    let items: Item[] = service.getItems();
    this.item = items[+this.idProduct - 1];
  }
}
