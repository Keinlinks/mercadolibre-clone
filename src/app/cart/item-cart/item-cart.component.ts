import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent {
  @Input() item!: Item

}
