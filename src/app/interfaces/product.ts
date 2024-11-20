export interface Product {
  id: string; // será alterado na versão final, está como string por conta do json-server
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  price: number;
  categoryId: number;
}
