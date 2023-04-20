import {createReducer, on} from "@ngrx/store";
import {ordersInitialState} from "./order.state";
import * as OrdersActions from "./order.actions";
import {xhrStatus} from "../../store/store-files/app-store.state";
import {state} from "@angular/animations";

export const orderReducer = createReducer(
  ordersInitialState,
  on(OrdersActions.getOrders, (state) => ({
    ...state,
    status: xhrStatus.loading
  })),
  on(OrdersActions.getOrdersSuccess, (state, {orderInfo}) => ({
    ...state,
    status: xhrStatus.success,
    orders: {
      ...orderInfo
    }
  })),
  on(OrdersActions.getOrdersError, (state) => ({
    ...state,
    status: xhrStatus.error
  }))
)
