import {createAction, props} from "@ngrx/store";
import {SortOptions} from "../service/category.service";
import {ProductsResponse} from "./category.state";

export const getProducts = createAction('[Category] Get Products', props<{ page: number, size: number, sortOrder: SortOptions, sortList?: string }>());
export const getProductsSuccess = createAction('[Category] Get Products Success', props<{ products: ProductsResponse }>());
export const getProductsError = createAction('[Category] Get Products Error');
