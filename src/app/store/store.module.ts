import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./AppState";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {userReducer} from "./store-files/app-store.reducer";
import {cartReducer} from "../cart/store/cart.reducer";
import {productReducer} from "../product/store/product.reducer";
import {productsReducer} from "../category/store/category.reducer";
import {orderReducer} from "../orders/store/order.reducer";

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  products: productsReducer,
  orders: orderReducer
}


@NgModule({
  imports: [CommonModule]
})
export class AppStoreModule {
}
