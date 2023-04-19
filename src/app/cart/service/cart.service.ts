import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";
import {CartState} from "../store/cart.state";



@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {
  }

  public getCart(customerId: number) {
    return this.http.get<CartState>(`${baseURL}/${customerId}/cart`);
  }

  public addProduct(customerId: number, productId: number) {
    return this.http.post<any>(`${baseURL}/cart`, {
      customerId: customerId,
      productId: productId,
    }, { withCredentials: true });
  }

  public placeOrder() {
    return this.http.post(`${baseURL}/1/checkout`, "");
  }

  public applyVoucher(customerId: number, voucherCode: string) {
    return this.http.post(`${baseURL}/cart/voucher`, {
      customerId: customerId,
      voucherCode: voucherCode
    });
  }

  // public removeVoucher() {
  //   return this.http.
  // }
}
