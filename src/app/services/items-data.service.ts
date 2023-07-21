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
      image:
        'https://http2.mlstatic.com/D_NQ_NP_943801-MLC53246238639_012023-O.webp',
      price_final: 229990,
      price_original: 389990,
      discount: 41,
      cuotes: 6,
      free_shipment: true,
    },
    {
      id: 2,
      name: 'Acer Travelmate Spin B3 (touch)',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_744495-MLC45669917454_042021-O.webp',
      price_final: 279990,
      price_original: 279990,
      discount: 0,
      cuotes: 12,
      free_shipment: true,
    },
    {
      id: 3,
      name: 'Notebook Tagitop Uni-c Intel Celeron 4gb Ram 256gb Ssd 14.1',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_932059-MLC53435372143_012023-O.webp',
      price_final: 199990,
      price_original: 307677,
      discount: 35,
      cuotes: 12,
      free_shipment: true,
    },
    {
      id: 4,
      name: 'Cargador Para Macbook 60 W Providencia Nuevo Modelo A1278',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_941839-MLC43646882023_102020-O.webp',
      price_final: 19990,
      price_original: 19990,
      discount: 0,
      cuotes: 12,
      free_shipment: true,
    },
    {
      id: 5,
      name: 'Alzador Aluminio Notebook Plegable Soporte Elevador',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_685939-MLC69559268954_052023-O.webp',
      price_final: 5433,
      price_original: 7990,
      discount: 32,
      cuotes: 6,
      free_shipment: false,
    },
    {
      id: 6,
      name: 'Cargador Notebook Lenovo Ideapad 20v 3.25a 65w',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_954410-MLC50847483004_072022-O.webp',
      price_final: 14240,
      price_original: 14990,
      discount: 5,
      cuotes: 12,
      free_shipment: false,
    },
  ];

  getItems() {
    return this.items;
  }
}
