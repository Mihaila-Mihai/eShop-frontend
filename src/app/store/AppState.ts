import {createReducer} from "@ngrx/store";
import {UserState} from "./store-files/app-store.state";
import {CartState} from "../cart/store/cart.state";

export interface AppState {
  user: UserState;
  cart: CartState;
}


