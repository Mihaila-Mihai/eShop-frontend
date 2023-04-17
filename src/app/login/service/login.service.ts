import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

export const baseURL = '//localhost:8050/eShop';

export interface LoginInfo {
  email: string,
  password: string
}

@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }
  public login(payload: LoginInfo) {
    this.http.post(`${baseURL}/login`, payload, { withCredentials: true }).subscribe(res => {
      this.router.navigate(['products']);
    });
  }
}
