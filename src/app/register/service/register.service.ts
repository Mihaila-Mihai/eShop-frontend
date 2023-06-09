import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment.dev";


export interface Customer {
  email: string,
  firstName: string,
  lastName: string,
  password: string
}

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  private baseURL = environment.serverUrl;

  private body = {
    "firstName": "",
    "lastName": "Mihaila",
    "email": "mihai@m.ron"
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  public register(payload: Customer) {
    return this.http.post<Customer>(`${this.baseURL}/register`, payload);
  }
}
