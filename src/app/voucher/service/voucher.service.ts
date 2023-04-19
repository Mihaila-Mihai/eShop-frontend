import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VoucherInfo} from "../content/voucher.mock";
import {baseURL} from "../../login/service/login.service";

@Injectable({
  providedIn: "root"
})
export class VoucherService {
  constructor(private http: HttpClient) {
  }

  public addVoucher(voucherInfo: VoucherInfo) {
    return this.http.post(`${baseURL}/voucher`, voucherInfo, {withCredentials: true});
  }
}
