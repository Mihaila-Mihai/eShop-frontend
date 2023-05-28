import {createReducer, on} from "@ngrx/store";
import {productInitialState} from "./product.state";
import * as ProductActions from "./product.actions";
import {xhrStatus} from "../../store/store-files/app-store.state";



export const productReducer = createReducer(
  productInitialState,

)
