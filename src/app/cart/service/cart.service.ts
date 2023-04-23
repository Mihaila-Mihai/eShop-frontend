import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CartState} from "../store/cart.state";
import {environment} from "../../../environments/environment.dev";



@Injectable({
  providedIn: "root"
})
export class CartService {
  private baseURL = environment.serverUrl;
  constructor(private http: HttpClient) {
  }

  public getCart(customerId: number) {
    return this.http.get<CartState>(`${this.baseURL}/${customerId}/cart`, {withCredentials: true});
  }

  public addProduct(customerId: number, productId: number) {
    return this.http.post<any>(`${this.baseURL}/cart`, {
      customerId: customerId,
      productId: productId,
    }, { withCredentials: true });
  }

  public placeOrder(userId: number) {
    return this.http.post<{message: string, error: string}>(`${this.baseURL}/${userId}/checkout`, "");
  }

  public applyVoucher(customerId: number, voucherCode: string) {
    return this.http.post(`${this.baseURL}/cart/voucher`, {
      customerId: customerId,
      voucherCode: voucherCode
    });
  }

  public removeVoucher(cartId: number) {
    return this.http.delete(`${this.baseURL}/${cartId}/voucher`, { withCredentials: true});
  }

  public clearCart(customerId: number) {
    return this.http.delete(`${this.baseURL}/${customerId}/cart`, { withCredentials: true });
  }
}
