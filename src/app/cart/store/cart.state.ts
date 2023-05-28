import {xhrStatus} from "../../store/store-files/app-store.state";
import {Cart, Courier, DeliveryMethod} from "../content/model";
import {CART_ITEMS} from "../content/cart.mock";

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
  items: {
    "1": CART_ITEMS,
  },
  courier: Courier.FAN_COURIER,
  deliveryMethod: DeliveryMethod.THREE_TO_FIVE_DAYS,
  shippingInsurance: {
    applied: false,
    price: 15
  },
  summary: {
    itemsCount: 1,
    productsTotalPrice: 35,
    totalPrice: 35
  },
  deliveryAddress: {
    firstName: "Ion",
    lastName: "Popescu",
    country: "Romania",
    district: "bucuresti",
    city: "bucuresti",
    street: "Mihail Kogalniceanu, 26",
    email: "ion.popescu@gmail.com",
    phoneNumber: "0711 111 111"
  }
}
