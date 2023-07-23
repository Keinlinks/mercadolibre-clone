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
  show_alert: boolean = false;
  ngOnInit(): void {
    this.cuotes = Math.round(this.item.price_final / this.item.cuotes);
    if (this.item.price_original == this.item.price_final)
      this.show_discount = false;
    else this.show_discount = true;
  }
  addCart() {
    this.service.addToCart(this.item.id.toString());
    this.show_alert = !this.show_alert;
  }
}
