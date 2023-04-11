import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";

export interface ProductInfo {
  displayName: string,
  price: number,
  stock: number
}

export interface ProductResponse {
  displayName: string,
  price: number,
  productId: number,
  stock: number
}

const URL = `${baseURL}/product`

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  public addProduct(payload: ProductInfo) {
    return this.http.post<ProductResponse>(URL, payload);
  }
}
