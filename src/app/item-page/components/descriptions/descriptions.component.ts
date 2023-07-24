import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/models/item-model';
import { ItemsDataService } from 'src/app/services/items-data.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
})
export class DescriptionsComponent implements OnInit {
  constructor(private service: ItemsDataService, alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }
  @Input() item!: Item;
  cuotes: number = 1;
  show_discount: boolean = true;
  added_cart: boolean = false;
  show_alert_succes: boolean = false;
  show_alert_error: boolean = false;
  ngOnInit(): void {
    this.cuotes = Math.round(this.item.price_final / this.item.cuotes);
    if (this.item.price_original == this.item.price_final)
      this.show_discount = false;
    else this.show_discount = true;
    let cartProducts = this.service.getCartProducts();
    if (cartProducts.includes(this.item.id.toString())) {
      this.added_cart = true;
    }
  }
  addCart() {
    let cartProducts = this.service.getCartProducts();
    if (!cartProducts.includes(this.item.id.toString())) {
      this.show_alert_succes = true;
      this.show_alert_error = false;
      this.service.addToCart(this.item.id.toString());
      this.added_cart = true;
    }
  }
  removeItem() {
    this.service.removeFromCart(this.item.id.toString());
    this.added_cart = false;
    this.show_alert_error = true;
    this.show_alert_succes = false;
  }
}
