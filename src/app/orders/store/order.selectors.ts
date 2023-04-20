import {AppState} from "../../store/AppState";
import {createSelector} from "@ngrx/store";

export const orderSelector = (state: AppState) => state.orders

export const selectOrders = createSelector(
  orderSelector,
  (state) => state.orders
)
