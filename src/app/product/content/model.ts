import {ProductSize} from "../../cart/content/model";

export interface Product {
  id: number;
  thumbnail: string;
  name: string;
  color: string;
  price: number;
  brand: string;
  sizeGuide: string;
  carousel:  string[];
  variante: Variant[];
  sizes: Size[];
  details: Detail[];
  categories: Category[];
  size: ProductSize;
  cartSize?: ProductSize;
}

export interface Variant {
  image: string;
  id: string;
}

export interface Size {
  size: ProductSize;
  stock: number;
  id: number;
}

export interface Detail {
  first?: boolean;
  title: string;
  flex?: boolean;
  content: Detail[] | string;
}

export enum Category {
  MEN, WOMEN, T_SHIRT, HOODIE, DRESS, JACKET, TOP
}
