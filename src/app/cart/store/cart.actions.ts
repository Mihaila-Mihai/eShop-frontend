import {createAction, props} from "@ngrx/store";
import {CartState} from "./cart.state";

export const addProductToCart = createAction('[Product] Add Product To Cart', props<{ productId: number }>());
export const noOpAction = createAction('');
export const addProductToCartSuccess = createAction('[Product] Add Product To Cart Success');
export const applyVoucher = createAction('[Cart] Apply Voucher', props<{ voucherCode: string }>());
export const applyVoucherSuccess = createAction('[Cart] Apply Voucher Success');
export const removeVoucher = createAction("[Cart] Remove Voucher");
export const removeVoucherSuccess = createAction("[Cart] Remove Voucher Success");
export const getCart = createAction('[Cart] Get Cart');
export const getCartSuccess = createAction('[Cart] Get Cart Success', props<{ cart: CartState }>());
export const getCartError = createAction("[Cart] Get Cart Error", props<{ error: {error: string} }>());
export const placeOrder = createAction('[Cart] Place Order');
export const placeOrderSuccess = createAction('[Cart] Place Order Success', props<{ orderId: string }>());
export const clearCart = createAction("[Cart] Clear Cart");
export const clearCartSuccess = createAction("[Cart] Clear Cart Success");
