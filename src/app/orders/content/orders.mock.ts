import {OrdersResponse} from "../store/order.state";

export const ORDER_MOCK: OrdersResponse = {
  orders: [
    {
      orderId: 1,
      createdOn: new Date().toISOString(),
      totalPrice: 50,
      orderItems: [
        {
          orderItemId: 1,
          displayName: 'iPhone 13',
          price: 50
        },
        {
          orderItemId: 1,
          displayName: 'iPhone 13',
          price: 50
        },
        {
          orderItemId: 1,
          displayName: 'iPhone 13',
          price: 50
        }
      ]
    },
    {
      orderId: 1,
      createdOn: new Date().toISOString(),
      totalPrice: 50,
      orderItems: [
        {
          orderItemId: 1,
          displayName: 'iPhone 13',
          price: 50
        },
        {
          orderItemId: 1,
          displayName: 'iPhone 13',
          price: 50
        },
        {
          orderItemId: 1,
          displayName: 'iPhone 13',
          price: 50
        }
      ]
    }
  ]
}
