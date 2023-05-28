import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {CartService} from "../service/cart.service";
import * as CartActions from './cart.actions';
import {catchError, concatMap, debounce, debounceTime, map, mergeMap, of, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCustomer} from "../../store/store-files/app-store.selectors";
import {AppState} from "../../store/AppState";
import {Router} from "@angular/router";
import {selectCart} from "./cart.selectors";
import * as AppActions from "../../store/store-files/app-store.actions";
import {MatSnackBar} from "@angular/material/snack-bar";
import {selectProductById} from "../../product/store/product.selector";
import {increaseItemQuantity, proceedToAddToCart} from "./cart.actions";


@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService, private store: Store<AppState>, private router: Router, private snackBar: MatSnackBar) {
  }

  public addProductToCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.addProductToCart),
    concatLatestFrom((action) => [this.store.select(selectCart), this.store.select(selectProductById(action.productId))]),
    switchMap(([action, cart, product]) => {
      this.router.navigate(['/cos']);
      if (cart.items[action.productId]) {
        return of(increaseItemQuantity({productId: action.productId}))
      }
      return of(proceedToAddToCart({product: product!!, cartSize: action.cartSize}))
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
        return CartActions.getCartSuccess({cart: res});
      }), catchError((error) => of(CartActions.getCartError(error))))
    })
  ));

  public getCartError$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.getCartError),
    tap((action) => {
      this.router.navigate(["/"]);
      if (action.error.error.includes("empty")) {
        this.snackBar.open("Coșul dumneavoastră este gol", "x", {
          verticalPosition: "top",
          horizontalPosition: "center"
        })
      } else {
        this.snackBar.open("A avut loc o eroare", "x", {
          verticalPosition: "top",
          horizontalPosition: "center"
        })
      }
    })
  ), {dispatch: false})


  // public applyVoucher$ = createEffect(() => this.actions$.pipe(
  //   ofType(CartActions.applyVoucher),
  //   concatLatestFrom(() => this.store.select(selectCustomer)),
  //   switchMap(([action, customer]) => {
  //     return this.cartService.applyVoucher(customer.customerId!!, action.voucherCode).pipe(mergeMap(() => {
  //       return [CartActions.applyVoucherSuccess(), CartActions.getCart()];
  //     }))
  //   })
  // ));

  // public removeVoucher$ = createEffect(() => this.actions$.pipe(
  //   ofType(CartActions.removeVoucher),
  //   concatLatestFrom(() => this.store.select(selectCart)),
  //   switchMap(([action, cart]) => {
  //     return this.cartService.removeVoucher(cart.cartId!!).pipe(mergeMap(() => {
  //       return [CartActions.removeVoucherSuccess(), CartActions.getCart()];
  //     }))
  //   })
  // ))

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

  public clearCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.clearCart),
    concatLatestFrom(() => this.store.select(selectCustomer)),
    switchMap(([action, customer]) => {
      return this.cartService.clearCart(customer.customerId!!).pipe(mergeMap(() => {
        return [CartActions.clearCartSuccess(), CartActions.getCart()];
      }))
    })
  ))
}
