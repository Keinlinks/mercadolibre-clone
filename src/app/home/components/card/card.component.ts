import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: Item;
  cuotes: number = 1;
  show_discount: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.cuotes = Math.round(this.item.price_final / this.item.cuotes);
    if (this.item.price_original == this.item.price_final)
      this.show_discount = false;
    else this.show_discount = true;
  }
}
