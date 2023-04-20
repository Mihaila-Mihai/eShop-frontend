import {createAction, props} from "@ngrx/store";
import {OrdersResponse} from "./order.state";

export const getOrders = createAction('[Orders] Get Orders');
export const getOrdersSuccess = createAction('[Orders] Get Orders Success', props<{ orderInfo: OrdersResponse }>());
export const getOrdersError = createAction('[Orders] Get Orders Error');
