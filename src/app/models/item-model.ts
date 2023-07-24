export interface Item {
  id: number;
  name: string;
  image: string[];
  price_final: number;
  price_original: number;
  discount: number;
  cuotes: number;
  free_shipment: boolean;
  new: boolean;
  stock_enable: boolean;
  stock_count: number;
  amount?: number;
}
