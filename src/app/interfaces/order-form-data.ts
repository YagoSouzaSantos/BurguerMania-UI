import { Product } from "./product";

export interface OrderFormData {
  products: Product[];
  notes: string;
}
