import {xhrStatus} from "../../store/store-files/app-store.state";

export interface ProductsResponse {
  "_embedded": {
    "productModels": ProductModel[],
  },
  "_links": {
    "first": {
      "href": string
    },
    "self": {
      "href": string
    },
    "next": {
      "href": string
    },
    "last": {
      "href": string
    }
  },
  "page": Page
}

export interface Page {
  "size": number,
  "totalElements": number,
  "totalPages": number,
  "number": number
}

export interface ProductModel {
  "productId": number,
  "displayName": string,
  "price": number,
  "stock": number,
  "variations": VariationModel[]
}

export interface VariationModel {
  color: string,
  storageCapacity: string,
}

export interface ProductsState {
  status: xhrStatus,
  products?: ProductsResponse
}

export const productsInitialState: ProductsState = {
  status: xhrStatus.initial
};
