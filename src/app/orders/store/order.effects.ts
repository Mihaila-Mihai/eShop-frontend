import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import * as OrdersActions from "./order.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import {selectCustomer} from "../../store/store-files/app-store.selectors";
import {catchError, map, of, switchMap} from "rxjs";
import {OrdersService} from "../service/orders.service";

@Injectable()
export class OrderEffects{
  constructor(private actions$: Actions, private store: Store<AppState>, private ordersService: OrdersService) {
  }

  public getOrders$ = createEffect(() => this.actions$.pipe(
    ofType(OrdersActions.getOrders),
    concatLatestFrom(() => this.store.select(selectCustomer)),
    switchMap(([action, customer]) => {
      console.log(customer.customerId);
      return this.ordersService.getOrders(customer.customerId!!).pipe(map((res) => {
        return OrdersActions.getOrdersSuccess({orderInfo: res});
      }), catchError(() => of(OrdersActions.getOrdersError())))
    })
  ))
}
