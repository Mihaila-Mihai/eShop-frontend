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
    cartId: cart.cart.cartId,
    totalPrice: cart.cart.totalPrice,
    voucher: {...cart.cart.voucher!!},
    products: cart.cart.products
  })),
  on(CartActions.getCartError, (state, {error}) => ({
    status: xhrStatus.error,
    error: error,
    cartId: undefined,
    totalPrice: undefined,
    voucher: undefined,
    products: undefined,
  }))
)
