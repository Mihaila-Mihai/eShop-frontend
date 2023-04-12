import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";

export interface ProductInfo {
  displayName: string,
  price: number,
  stock: number
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

const URL = `${baseURL}/product`

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  public addProduct(payload: ProductInfo) {
    return this.http.post<ProductPostResponse>(URL, payload);
  }

  public getProduct(id: string) {
    return this.http.get<ProductGetResponse>(`${URL}/${id}`);
  }
}
