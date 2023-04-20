import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";
import {OrdersResponse} from "../store/order.state";


@Injectable({
  providedIn: "root"
})
export class OrdersService {
  constructor(private http: HttpClient) {
  }

  public getOrders(customerId: number) {
    return this.http.get<OrdersResponse>(`${baseURL}/${customerId}/order-history`);
  }
}
