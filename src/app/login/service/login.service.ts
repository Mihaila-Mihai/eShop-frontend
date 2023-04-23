import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, of} from "rxjs";
import {on} from "@ngrx/store";
import {environment} from "../../../environments/environment.dev";

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
  private baseURL = environment.serverUrl;

  constructor(private http: HttpClient, private router: Router) {
  }
  public login(payload: LoginInfo) {
    return this.http.post(`${this.baseURL}/login`, payload, { withCredentials: true });
  }

  public getCustomer() {
    return this.http.get<{ message?: string, error?: string }>(`${this.baseURL}/customer`, { observe: "response", withCredentials: true });
  }

  public getCustomerByEmail(email: string) {
    return this.http.get<CustomerInfo>(`${this.baseURL}/customer/${email}`, { withCredentials: true })
  }

  public logOut() {
    return this.http.get(`${this.baseURL}/logout`, {withCredentials: true});
  }
}
