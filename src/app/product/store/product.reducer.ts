import {createReducer, on} from "@ngrx/store";
import {productInitialState} from "./product.state";
import * as ProductActions from "./product.actions";
import {xhrStatus} from "../../store/store-files/app-store.state";



export const productReducer = createReducer(
  productInitialState,
  on(ProductActions.getProduct, (state, {productId}) => ({
    ...state,
    [productId]: {
      status: xhrStatus.loading,
    }
  })),
  on(ProductActions.getProductSuccess, (state, { productInfo}) => ({
    ...state,
    [productInfo.productId]: {
      ...state[productInfo.productId],
      status: xhrStatus.success,
      product: {
        ...state[productInfo.productId].product,
        productId: productInfo.productId,
        price: productInfo.price,
        stock: productInfo.stock,
        displayName: productInfo.displayName,
        details: productInfo.details
      }
    }
  }))
)
