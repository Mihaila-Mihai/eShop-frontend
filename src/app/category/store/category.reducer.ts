import {createReducer, on} from "@ngrx/store";
import {productsInitialState} from "./category.state";
import * as CategoryActions from "./category.actions";
import {xhrStatus} from "../../store/store-files/app-store.state";

export const productsReducer = createReducer(
  productsInitialState,
  on(CategoryActions.getProducts, (state) => ({
    ...state,
    status: xhrStatus.loading,
  })),
  on(CategoryActions.getProductsSuccess, (status, {products}) => ({
    ...status,
    status: xhrStatus.success,
    products: {
      ...products
    }
  }))
)
