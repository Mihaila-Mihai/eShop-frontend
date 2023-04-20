import {xhrStatus} from "../../store/store-files/app-store.state";

export interface OrdersResponse {
  orders: {
    orderId: number,
    createdOn: string,
    totalPrice: number,
    orderItems: {
      orderItemId: number,
      displayName: string,
      price: number,
    }[]
  }[]
}

export interface OrdersState {
  orders?: OrdersResponse
  status: xhrStatus
}

export const ordersInitialState: OrdersState = {
  status: xhrStatus.initial
}
