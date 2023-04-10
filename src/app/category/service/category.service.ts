import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProductsResponse} from "../content/model";
import {tap} from "rxjs";

export const baseURL = 'http://localhost:8050/eShop';

export enum SortOptions {
  ASC = "ASC",
  DESC = "DESC"
}

@Injectable({providedIn: "root"})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  public getProducts(page: number = 0, size: number = 2, sortOrder: SortOptions = SortOptions.ASC, sortList: string = "") {
    return this.http.get<ProductsResponse>(`${baseURL}/products`, {
      params: {
        page: page,
        size: size,
        sortList: sortList,
        sortOrder: sortOrder,
      }
    });
  }
}
