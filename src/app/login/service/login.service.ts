import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, of} from "rxjs";
import {on} from "@ngrx/store";

export const baseURL = '//localhost:8050/eShop';

export interface LoginInfo {
  email: string,
  password: string
}

export interface CustomerInfo {
  customerId: number,
  username: string,
  firstName: string,
  lastName: string,
}

@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }
  public login(payload: LoginInfo) {
    return this.http.post(`${baseURL}/login`, payload, { withCredentials: true });
  }

  public getCustomer() {
    return this.http.get<{ message?: string, error?: string }>(`${baseURL}/customer`, { observe: "response", withCredentials: true });
  }

  public getCustomerByEmail(email: string) {
    return this.http.get<CustomerInfo>(`${baseURL}/customer/${email}`, { withCredentials: true })
  }

  public logOut() {
    return this.http.get(`//localhost:8050/logout`, {withCredentials: true});
  }
}
