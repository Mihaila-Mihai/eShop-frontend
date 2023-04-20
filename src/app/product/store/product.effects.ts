import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../service/product.service";
import * as ProductActions from "./product.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {CategoryService} from "../../category/service/category.service";
import {Router} from "@angular/router";

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService, private router: Router) {
  }


  public getProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.getProduct),
    switchMap((action) => {
      return this.productService.getProduct(action.productId.toString()).pipe(map(response => {
        return ProductActions.getProductSuccess({ productInfo: response });
      }))
    })
  ));

  public addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.addProduct),
    switchMap((action) => {
      return this.productService.addProduct(action.productInfo).pipe(map((response) => {
        return ProductActions.addProductSuccess({productId: response.productId.toString()});
      }))
    })
  ));

  public addProductSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.addProductSuccess),
    tap((action) => {
      this.router.navigate(['product', action.productId])
    })
  ), {dispatch: false});
}
