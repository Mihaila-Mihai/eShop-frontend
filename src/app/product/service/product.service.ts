import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductGetResponse, ProductInfo, ProductPostResponse} from "../store/product.state";
import {environment} from "../../../environments/environment.dev";


@Injectable({
  providedIn: "root"
})
export class ProductService {
  private baseURL = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  public addProduct(payload: ProductInfo) {
    return this.http.post<ProductPostResponse>(`${this.baseURL}/product`, payload, { withCredentials: true });
  }

  public getProduct(id: string) {
    return this.http.get<ProductGetResponse>(`${this.baseURL}/product/${id}`, {withCredentials: true});
  }
}
