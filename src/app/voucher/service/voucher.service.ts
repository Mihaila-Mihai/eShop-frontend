import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VoucherInfo} from "../content/voucher.mock";
import {environment} from "../../../environments/environment.dev";

@Injectable({
  providedIn: "root"
})
export class VoucherService {
  private baseURL = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  public addVoucher(voucherInfo: VoucherInfo) {
    return this.http.post(`${this.baseURL}/voucher`, voucherInfo, {withCredentials: true});
  }
}
