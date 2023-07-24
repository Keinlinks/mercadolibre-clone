import { Injectable } from '@angular/core';
import { Item } from '../models/item-model';

@Injectable({
  providedIn: 'root',
})
export class ItemsDataService {
  constructor() {}
  items: Item[] = [
    {
      id: 1,
      name: 'Notebook Hp 14-dk1510la Amd3020e 4gb 256ssd',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_943801-MLC53246238639_012023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_984270-MLC53246238635_012023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_669560-MLC53246238637_012023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_814389-MLC53246238640_012023-R.webp',
      ],
      price_final: 229990,
      price_original: 389990,
      discount: 41,
      cuotes: 6,
      free_shipment: true,
      new: false,
      stock_enable: true,
      stock_count: 14,
    },
    {
      id: 2,
      name: 'Acer Travelmate Spin B3 (touch)',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_744495-MLC45669917454_042021-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_906583-MLC45669917463_042021-R.webp',
      ],
      price_final: 279990,
      price_original: 279990,
      discount: 0,
      cuotes: 12,
      free_shipment: true,
      new: true,
      stock_enable: false,
      stock_count: 14,
    },
    {
      id: 3,
      name: 'Notebook Tagitop Uni-c Intel Celeron 4gb Ram 256gb Ssd 14.1',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_932059-MLC53435372143_012023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_748604-MLC48928677680_012022-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_954127-MLC48928677678_012022-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_874210-MLC54224691142_032023-R.webp',
      ],
      price_final: 199990,
      price_original: 307677,
      discount: 35,
      cuotes: 12,
      free_shipment: false,
      new: true,
      stock_enable: true,
      stock_count: 1,
    },
    {
      id: 4,
      name: 'Notebook Asus Zenbook 14x Oled Amd Ryzen 7 (5800h) 8gb Ram 512 Ssd 14 2,8k (2880 X 1800) Oled 16:10 90hz Touch Windows 11 (um5401qa-kn056w)',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_824338-MLU69516453599_052023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_979113-MLU69516453601_052023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_767928-MLU69516453609_052023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_892905-MLU69516363835_052023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_712051-MLU69516453619_052023-R.webp',
      ],
      price_final: 649990,
      price_original: 799990,
      discount: 18,
      cuotes: 6,
      free_shipment: false,
      new: true,
      stock_enable: true,
      stock_count: 14,
    },
    {
      id: 5,
      name: 'Notebook Ideapad Gaming 3 Amd Ryzen 5 8gb Ram 512gb Ssd Rtx3',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_714731-MLC51443705725_092022-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_832244-MLC51443705733_092022-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_824183-MLC51443705731_092022-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_637072-MLC51443705729_092022-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_686761-MLC51443705728_092022-R.webp',
      ],
      price_final: 769990,
      price_original: 1449990,
      discount: 46,
      cuotes: 12,
      free_shipment: true,
      new: true,
      stock_enable: true,
      stock_count: 5,
    },
    {
      id: 6,
      name: 'Notebook Dell Inspiron 14-5459 En Desarme Partes Piezas',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_909784-MLC31214056039_062019-R.webp',
      ],
      price_final: 15000,
      price_original: 15000,
      discount: 0,
      cuotes: 6,
      free_shipment: false,
      new: false,
      stock_enable: true,
      stock_count: 4,
    },
    {
      id: 7,
      name: 'Pc Gamer X99/ 10 Nucleos/ Ram 32gb/ Ssd 1tb/ Gtx 1660 Ti 6gb',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_812461-MLC69933054065_062023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_991401-MLC69472113851_052023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_780867-MLC69933206807_062023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_976277-MLC69914486832_062023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_763150-MLC52820415605_122022-R.webp',
      ],
      price_final: 649140,
      price_original: 698000,
      discount: 7,
      cuotes: 12,
      free_shipment: true,
      new: true,
      stock_enable: true,
      stock_count: 4,
    },
    {
      id: 8,
      name: 'Pc Armado Amd Ryzen 5 5600g 6-core Radeon + Ram 16gb + Wifi',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_702947-MLC70262468284_072023-R.webp',
        'https://http2.mlstatic.com/D_Q_NP_796174-MLC70262468282_072023-R.webp',
      ],
      price_final: 379000,
      price_original: 379000,
      discount: 0,
      cuotes: 6,
      free_shipment: true,
      new: false,
      stock_enable: true,
      stock_count: 14,
    },
    {
      id: 9,
      name: 'Notebook Asus Tuf F15 Intel Core I5 8gb Ram 512 Ssd 15.6',
      image: [
        'https://http2.mlstatic.com/D_Q_NP_909784-MLC31214056039_062019-R.webp',
      ],
      price_final: 769990,
      price_original: 969990,
      discount: 20,
      cuotes: 6,
      free_shipment: false,
      new: true,
      stock_enable: true,
      stock_count: 2,
    },
  ];

  getItems() {
    return this.items;
  }
  //LOCALSTORAGE---------------------
  private readonly STORAGE_KEY = 'cartProducts';

  getCartProducts() {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  }

  addToCart(productId: string): void {
    let cartProducts = this.getCartProducts();
    if (!cartProducts.includes(productId)) {
      cartProducts.push(productId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cartProducts));
    }
  }

  removeFromCart(productId: string): void {
    let cartProducts = this.getCartProducts();
    cartProducts = cartProducts.filter((id: any) => id !== productId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cartProducts));
  }

  clearCart(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
