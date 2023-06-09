import {UserState} from "./store-files/app-store.state";
import {CartState} from "../cart/store/cart.state";
import {ProductState} from "../product/store/product.state";
import {ProductsState} from "../category/store/category.state";
import {OrdersState} from "../orders/store/order.state";

export interface AppState {
  user: UserState;
  cart: CartState;
  product: ProductState;
  products: ProductsState;
  orders: OrdersState;
}


