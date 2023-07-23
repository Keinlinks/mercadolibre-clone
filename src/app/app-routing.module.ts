import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'productos',
    loadChildren: () =>
      import('./item-page/item-page.module').then((m) => m.ItemPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
