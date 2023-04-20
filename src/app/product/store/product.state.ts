import {xhrStatus} from "../../store/store-files/app-store.state";

export interface ProductInfo {
  displayName: string,
  price: number,
  stock: number
  details: ProductDetails
}

export interface ProductDetails {
  color: string,
  storageCapacity: string,
  brand: string,
  otherColors: string,
  rating: number
}

export interface ProductPostResponse {
  displayName: string,
  price: number,
  productId: number,
  stock: number
}

export interface ProductGetResponse {
  productId: number,
  displayName: string
  price: number
  stock: number
  details?: {
    productVariationId: number
    color?: string
    storageCapacity?: string
    brand?: string
    otherColors?: string
    rating?: number
  }

}

export interface ProductsState {
  product?: ProductGetResponse;
  status: xhrStatus;
}

export interface ProductState {
  [key: number]: ProductsState;
}

export const productInitialState: ProductState = {}
