import {AppState} from "../../store/AppState";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {ProductGetResponse} from "./product.state";
import {Product} from "../content/model";

export const productSelector = (state: AppState) => state.product

export const selectProductById = (productId: number): MemoizedSelector<AppState, Product | undefined> => {
  return createSelector(
    productSelector,
    (product) => product[productId].product
  )
}
