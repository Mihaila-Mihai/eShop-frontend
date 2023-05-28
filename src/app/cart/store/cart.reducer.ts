import {createReducer, on} from "@ngrx/store";
import {cartInitialState} from "./cart.state";
import * as CartActions from './cart.actions';
import {xhrStatus} from "../../store/store-files/app-store.state";
import {Cart, Item} from "../content/model";

// function increaseQuantity(state: Cart, item: Item) {
//   let ind: any;
//   const find = state.items.find((el, index) => {
//     ind = index
//     return el.item = item;
//   });
//   if (find) {
//     find.quantity = find.quantity + 1;
//     state.items[ind] = find;
//   }
//
//   return state.items;
// }

export const cartReducer = createReducer(
  cartInitialState,
  on(CartActions.modifyInsurance, (state, {applied}) => ({
    ...state,
    shippingInsurance: {
      ...state.shippingInsurance,
      applied: applied,
      price: 15
    },
    summary: {
      ...state.summary,
      totalPrice: applied ? state.summary.totalPrice + state.shippingInsurance.price : state.summary.totalPrice - state.shippingInsurance.price
    }
  })),
  on(CartActions.applyVoucher, (state, {id}) => ({
    ...state,
    voucher: {
      ...state.voucher,
      id: id,
      value: 10
    },
    summary: {
      ...state.summary,
      totalPrice: state.summary.totalPrice - (state.voucher?.value ?? 10)
    }
  })),
  on(CartActions.removeVoucher, (state) => ({
    ...state,
    summary: {
      ...state.summary,
      totalPrice: state.summary.totalPrice + (state.voucher?.value ?? 0)
    },
    voucher: undefined,
  })),
  on(CartActions.saveAddress, (state, {address}) => ({
    ...state,
    deliveryAddress: {
      ...address
    }
  })),
  on(CartActions.increaseItemQuantity, (state, {productId}) => ({
    ...state,
    items: {
      ...state.items,
      [productId]: {
        ...state.items[productId],
        quantity: state.items[productId].quantity + 1
      }
    },
    summary: {
      ...state.summary,
      itemsCount: state.summary.itemsCount + 1,
      totalPrice: state.summary.totalPrice + state.items[productId].item.price,
      productsTotalPrice: state.summary.productsTotalPrice + state.items[productId].item.price,
    }
  })),
  on(CartActions.decreaseItemQuantity, (state, {item}) => ({
    ...state,
    items: {
      ...state.items,
      [item.id]: {
        ...state.items[item.id],
        quantity: state.items[item.id].quantity - 1
      }
    },
    summary: {
      ...state.summary,
      itemsCount: state.summary.itemsCount - 1,
      totalPrice: state.summary.totalPrice - state.items[item.id].item.price,
      productsTotalPrice: state.summary.productsTotalPrice - state.items[item.id].item.price,
    }
  })),
  on(CartActions.proceedToAddToCart, (state, {product, cartSize}) => ({
    ...state,
    items: {
      ...state.items,
      [product.id]: {
        quantity: 1,
        item: {
          ...product,
          cartSize: cartSize
        }
      }
    },
    summary: {
      itemsCount: 1,
      totalPrice: state.summary.totalPrice + product.price,
      productsTotalPrice: state.summary.productsTotalPrice + product.price
    }
  }))
)
