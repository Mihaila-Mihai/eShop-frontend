import {createAction, props} from "@ngrx/store";
import {CartState} from "./cart.state";

export const addProductToCart = createAction('[Product] Add Product To Cart', props<{ productId: number }>());
export const noOpAction = createAction('');
export const addProductToCartSuccess = createAction('[Product] Add Product To Cart Success');


export const applyVoucher = createAction('[Cart] Apply Voucher', props<{ voucherCode: string }>());

export const applyVoucherSuccess = createAction('[Cart] Apply Voucher Success');

export const getCart$ = createAction('[Cart] Get Cart');
export const getCartSuccess$ = createAction('[Cart] Get Cart Success', props<{ cart: CartState }>());
