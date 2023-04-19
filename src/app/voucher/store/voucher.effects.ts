import {Injectable} from "@angular/core";
import {AppState} from "../../store/AppState";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as VoucherActions from "./voucher.actions";
import {map, switchMap, tap} from "rxjs";
import {VoucherService} from "../service/voucher.service";

@Injectable()
export class VoucherEffects {
  constructor(private store: Store<AppState>, private actions$: Actions, private voucherService: VoucherService) {
  }

  public addVoucher$ = createEffect(() => this.actions$.pipe(
    ofType(VoucherActions.addVoucher),
    switchMap((action) => {
      return this.voucherService.addVoucher(action.voucherInfo).pipe(map(() => VoucherActions.addVoucherSuccess()))
    })
  ));

  public addVoucherSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(VoucherActions.addVoucherSuccess),
    tap(() => {

    })
  ), {dispatch: false})
}
