import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./AppState";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {userReducer} from "./store-files/app-store.reducer";
import {cartReducer} from "../cart/store/cart.reducer";

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  cart: cartReducer
}


@NgModule({
  imports: [CommonModule]
})
export class AppStoreModule {
}
