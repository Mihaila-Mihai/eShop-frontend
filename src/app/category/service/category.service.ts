import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {tap} from "rxjs";
import {ProductsResponse} from "../store/category.state";
import {environment} from "../../../environments/environment.dev";


export enum SortOptions {
  ASC = "ASC",
  DESC = "DESC"
}

@Injectable({providedIn: "root"})
export class CategoryService {
  private baseURL = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  public getProducts(page: number = 0, size: number = 2, sortOrder: SortOptions = SortOptions.ASC, sortList: string = "") {
    return this.http.get<ProductsResponse>(`${this.baseURL}/products`, {
      params: {
        page: page,
        size: size,
        sortList: sortList,
        sortOrder: sortOrder,
      }, withCredentials: true
    });
  }
}
