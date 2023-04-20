import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ProductActions from "../../product/store/product.actions";
import {catchError, map, of, switchMap} from "rxjs";
import * as CategoryActions from "./category.actions";
import {CategoryService} from "../service/category.service";

@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService) {
  }

  public getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.getProducts),
    switchMap((action) => {
      return this.categoryService.getProducts(action.page, action.size, action.sortOrder, action.sortList).pipe(map((response) => {
        return CategoryActions.getProductsSuccess({products: response})
      }), catchError(() => of(CategoryActions.getProductsError())))
    })
  ))
}
