import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class RegisterService {
  private URI = 'http://localhost:8050/eShop/register';
  private body = {
    "firstName": "",
    "lastName": "Mihaila",
    "email": "mihai@m.ron"
  };
  constructor(private http: HttpClient) {
  }

  public register() {
    console.log('test');
    this.http.post(this.URI, this.body).subscribe();
  }
}
