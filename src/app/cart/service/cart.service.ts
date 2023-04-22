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

  public placeOrder(userId: number) {
    return this.http.post<{message: string, error: string}>(`${baseURL}/${userId}/checkout`, "");
  }

  public applyVoucher(customerId: number, voucherCode: string) {
    return this.http.post(`${baseURL}/cart/voucher`, {
      customerId: customerId,
      voucherCode: voucherCode
    });
  }

  public removeVoucher(cartId: number) {
    return this.http.delete(`${baseURL}/${cartId}/voucher`, { withCredentials: true});
  }

  public clearCart(customerId: number) {
    return this.http.delete(`${baseURL}/${customerId}/cart`, { withCredentials: true });
  }
}
