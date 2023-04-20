import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../login/service/login.service";
import {ProductGetResponse, ProductInfo, ProductPostResponse} from "../store/product.state";


const URL = `${baseURL}/product`

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  public addProduct(payload: ProductInfo) {
    return this.http.post<ProductPostResponse>(URL, payload, { withCredentials: true });
  }

  public getProduct(id: string) {
    return this.http.get<ProductGetResponse>(`${URL}/${id}`);
  }
}
