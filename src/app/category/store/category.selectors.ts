import {AppState} from "../../store/AppState";

export const selectProducts = (state: AppState) => state.products.products;
