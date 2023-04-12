import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";

export interface CartProduct {
  productId: number,
  displayName: string,
  price: number,
  stock: number,
  details: {
    color: string,
    storageCapacity: string,
    brand: string,
  }
}
export interface CartGetResponse {
  totalPrice: number,
  voucher: {
    name: string,
    value: number,
    active: boolean
  },
  products: CartProduct[]
}

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {
  }

  public getCart() {
    return this.http.get<CartGetResponse>(`${baseURL}/1/cart`);
  }

  public addProduct() {
    return this.http.post<any>(`${baseURL}/cart`, {
      customerId: 1,
      productId: 1,
    });
  }

  // public removeVoucher() {
  //   return this.http.
  // }
}
