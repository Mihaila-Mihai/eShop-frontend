import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";

export interface OrdersResponse {
  orders: {
    orderId: number,
    createdOn: string,
    totalPrice: number,
    orderItems: {
      orderItemId: number,
      displayName: string,
      price: number,
    }[]
  }[]
}

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  constructor(private http: HttpClient) {
  }

  public getOrders(customerId: string) {
    return this.http.get<OrdersResponse>(`${baseURL}/${customerId}/order-history`);
  }
}
