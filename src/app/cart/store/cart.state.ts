import {xhrStatus} from "../../store/store-files/app-store.state";
import {Cart, Courier, DeliveryMethod} from "../content/model";

export interface CartProduct {
  productId?: number,
  displayName?: string,
  price?: number,
  stock?: number,
  details?: {
    color: string,
    storageCapacity: string,
    brand: string,
  }
}
export interface CartState {
  status?: xhrStatus,
  error?: { error: string },
  cartId?: number,
  totalPrice?: number,
  voucher?: {
    voucherCode: string,
    value: number,
    active: boolean
  },
  products?: CartProduct[]
}

export const cartInitialState: Cart = {
  items: {},
  summary: {
    itemsCount: 0,
    totalPrice: 0,
    productsTotalPrice: 0
  },
  courier: Courier.FAN_COURIER,
  shippingInsurance: {
    applied: false,
    price: 0
  },
  deliveryMethod: DeliveryMethod.UNSPECIFIED,


}
