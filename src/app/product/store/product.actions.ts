import {createAction, props} from "@ngrx/store";
import {ProductGetResponse, ProductInfo} from "./product.state";

export const getProduct = createAction('[Product] Get Product', props<{ productId: number }>());
export const getProductSuccess = createAction('[Product] Get Product Success', props<{ productInfo: ProductGetResponse }>());

export const addProduct = createAction('[Add Product] Add Product', props<{ productInfo: ProductInfo }>());
export const addProductSuccess = createAction('[Add Product] Add Product Success', props<{ productId: string }>());

