import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import * as AppStateActions from "./app-store.actions"
import {map, mergeMap, of, switchMap} from "rxjs";
import {CustomerInfo, LoginService} from "../../login/service/login.service";

@Injectable()
export class AppStoreEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {
  }

  public getUser$ = createEffect(() => this.actions$.pipe(
    ofType(AppStateActions.getUser),
    switchMap(() => {
      return this.loginService.getCustomer().pipe(
        switchMap(res => {
          if (res.body?.message) {
            return this.loginService.getCustomerByEmail(res.body.message);
          }
          return of(null);
        }), map((customerInfo: CustomerInfo | null) => {
          if (customerInfo) {
            return AppStateActions.getUserSuccess({userInfo: customerInfo});
          }
          return AppStateActions.getUserError();
        }));
    })
  ))
}
