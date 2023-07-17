import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
})
export class CategoriesMenuComponent implements OnInit {
  toggle: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  togglemenu() {
    this.toggle = !this.toggle;
  }
  togglemenuleave() {
    setTimeout(() => {
      this.toggle = !this.toggle;
    }, 500);
  }
}
