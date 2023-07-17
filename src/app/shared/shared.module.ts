import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CategoriesMenuComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
