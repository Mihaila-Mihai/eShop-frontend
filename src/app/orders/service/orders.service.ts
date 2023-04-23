import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {OrdersResponse} from "../store/order.state";
import {environment} from "../../../environments/environment.dev";


@Injectable({
  providedIn: "root"
})
export class OrdersService {
  private baseURL = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  public getOrders(customerId: number) {
    return this.http.get<OrdersResponse>(`${this.baseURL}/${customerId}/order-history`);
  }
}
