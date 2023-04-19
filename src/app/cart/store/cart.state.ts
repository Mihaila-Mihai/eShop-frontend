import {VoucherInfo} from "../../voucher/content/voucher.mock";
import {xhrStatus} from "../../store/store-files/app-store.state";

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
  totalPrice?: number,
  voucher?: {
    voucherCode: string,
    value: number,
    active: boolean
  },
  products?: CartProduct[]
}

export const cartInitialState: CartState = {}
