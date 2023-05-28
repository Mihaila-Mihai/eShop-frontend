import {Product} from "../../product/content/model";

export interface Cart {
  items: {
    [key: string]: CartItem
  };
  voucher?: CartVoucher;
  deliveryAddress?: DeliveryAddress;
  deliveryMethod: DeliveryMethod;
  courier: Courier;
  shippingInsurance: ShippingInsurance;
  summary: CartSummary;
}

export interface CartItem {
  item: Product;
  quantity: number;
}

export interface Item {
  image: string;
  displayName: string;
  id: string;
  size: ProductSize;
  color: string;
  price: number;
  quantity: number;
}

export interface CartVoucher {
  id: string;
  value: number;
}

export interface DeliveryAddress {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  district: string;
  city: string;
  street: string;
}

export enum DeliveryMethod {
  UNSPECIFIED= "Unspecified",
  THREE_TO_FIVE_DAYS = "3 - 5 days",
  FOUR_TO_SEVEN_DAYS = "4 - 7 days"
}

export enum Courier {
  FEDEX= "FedEx",
  FAN_COURIER = "FAN Courier",
  CARGUS = "Cargus"
}

export interface ShippingInsurance {
  price: number;
  applied: boolean;
}

export interface CartSummary {
  productsTotalPrice: number;
  itemsCount: number;
  totalPrice: number;
}

export enum ProductSize {
  XS= "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL"
}
