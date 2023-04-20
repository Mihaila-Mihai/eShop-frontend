import {AppState} from "../../store/AppState";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {ProductGetResponse} from "./product.state";

export const productSelector = (state: AppState) => state.product

export const selectProductById = (productId: number): MemoizedSelector<AppState, ProductGetResponse | undefined> => {
  return createSelector(
    productSelector,
    (product) => product[productId].product
  )
}
