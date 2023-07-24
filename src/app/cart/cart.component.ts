import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { ItemsDataService } from '../services/items-data.service';
import { Item } from '../models/item-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items!: Item[];
  cart_ids_a: string[] = [];
  cart_ids_b: number[] = [];
  totalPay: number = 0;
  constructor(private service: ItemsDataService) {
    this.loadData();
  }
  ngOnInit(): void {}

  clear_cart() {
    this.service.clearCart();
  }
  removeItem(id: number) {
    this.service.removeFromCart(id.toString());
    this.loadData();
  }
  loadData() {
    this.totalPay = 0;
    this.items = this.service.getItems();
    this.cart_ids_a = this.service.getCartProducts();
    this.cart_ids_b = this.cart_ids_a.map((str: string) => parseFloat(str));
    this.items = this.items.filter(({ id }: Item) => {
      return this.cart_ids_b.includes(id);
    });
    this.items.map((data) => {
      data.amount = 1;
    });
    this.totalPayFuntion();
  }
  addAmount(id: number) {
    for (let item of this.items) {
      if (item.id == id && item.amount! < item.stock_count) {
        item.amount = item.amount || 0;
        item.amount++;
        this.totalPay += item.price_final;
      }
    }
    this.totalPayFuntion();
  }
  removeAmount(id: number) {
    for (let item of this.items) {
      if (item.id === id && item.amount != 1) {
        item.amount = item.amount || 0;
        item.amount--;
        this.totalPay -= item.price_final;
      }
    }
    this.totalPayFuntion();
  }
  totalPayFuntion() {
    this.totalPay = 0;
    this.items.map((data) => {
      data.amount = data.amount || 1;
      this.totalPay += data.price_final * data.amount;
    });
  }
}
