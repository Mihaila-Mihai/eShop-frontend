import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {CartService} from "../service/cart.service";
import * as CartActions from './cart.actions';
import {concatMap, map, mergeMap, of, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCustomer} from "../../store/store-files/app-store.selectors";
import {AppState} from "../../store/AppState";
import {Router} from "@angular/router";


@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService, private store: Store<AppState>, private router: Router) {
  }

  public addProductToCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.addProductToCart),
    concatLatestFrom(() => this.store.select(selectCustomer)),
    switchMap(([action, customer]) => {
      return this.cartService.addProduct(customer.customerId!!, action.productId).pipe(map(() => {
        return CartActions.addProductToCartSuccess();
      }));
    })
  ));

  public addProductToCartSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.addProductToCartSuccess),
    tap(() => {
      this.router.navigate(['/cos']);
    })
  ), {dispatch: false});

  public getCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.getCart),
    concatLatestFrom(() => this.store.select(selectCustomer)),
    switchMap(([action, customer]) => {
      return this.cartService.getCart(customer.customerId!!).pipe(map((res) => {
        return CartActions.getCartSuccess({ cart: res });
      }))
    })
  ));


  public applyVoucher$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.applyVoucher),
    concatLatestFrom(() => this.store.select(selectCustomer)),
    switchMap(([action, customer]) => {
      return this.cartService.applyVoucher(customer.customerId!!, action.voucherCode).pipe(mergeMap(() => {
        return [CartActions.applyVoucherSuccess(), CartActions.getCart()];
      }))
    })
  ));

  public placeOrder$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.placeOrder),
    concatLatestFrom(() => this.store.select(selectCustomer)),
    switchMap(([action, customer]) => {
      return this.cartService.placeOrder(customer.customerId!!).pipe(map((response) => {
        return CartActions.placeOrderSuccess({orderId: response.message});
      }))
    })
  ));

  public placeOrderSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.placeOrderSuccess),
    tap((action) => {
      this.router.navigate(['comanda-confirmata', action.orderId]);
    })
  ), {dispatch: false})
}
