import {createReducer, on} from "@ngrx/store";
import {cartInitialState} from "./cart.state";
import * as CartActions from './cart.actions';
import {xhrStatus} from "../../store/store-files/app-store.state";
export const cartReducer = createReducer(
  cartInitialState,
  on(CartActions.getCart, (state) => ({
    ...state,
    status: xhrStatus.loading
  })),
  on(CartActions.getCartSuccess, (state, cart) => ({
    ...state,
    status: xhrStatus.success,
    totalPrice: cart.cart.totalPrice,
    voucher: { ...cart.cart.voucher!! },
    products: cart.cart.products
  }))
)
