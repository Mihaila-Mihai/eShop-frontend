import {createSelector} from "@ngrx/store";
import {AppState} from "../AppState";

export const selectCustomer = (state: AppState) => state.user
export const selectCustomerName = createSelector(
  selectCustomer,
  (customer) => customer.username
)
