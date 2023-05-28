import {Component, OnInit} from '@angular/core';
import {CategoryService, SortOptions} from "../service/category.service";
import {BehaviorSubject, combineLatest, filter, map, Observable, of, Subject, switchMap, tap} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ProductCardComponent} from "../partials/product-card/product-card.component";
import {CATEGORY_RESPONSE, ProductMock} from "../content/product.mock";
import {NavBarComponent} from "../../top-bar/view/nav-bar.component";
import {PaginationComponent} from "../../shared/pagination/pagination.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import * as CategoryActions from "../store/category.actions";
import {ProductsResponse} from "../store/category.state";
import {selectProducts} from "../store/category.selectors";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {CategoryBarComponent} from "../../category-bar/view/category-bar.component";
import {CategoryPageRequestResponse} from "../content/model";
import {FiltersComponent} from "../partials/filters/filters.component";
import {MatButtonModule} from "@angular/material/button";
import {productInitialState, ProductState} from "../../product/store/product.state";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../product/content/model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [
    AsyncPipe,
    CommonModule,
    ProductCardComponent,
    NavBarComponent,
    PaginationComponent,
    MatFormFieldModule,
    MatSelectModule,
    CategoryBarComponent,
    FiltersComponent,
    MatButtonModule
  ],
  standalone: true
})
export class CategoryComponent implements OnInit {
  public products$: Observable<CategoryPageRequestResponse | undefined>;
  public page$ = new BehaviorSubject<number>(0);
  public size$: Observable<number> = of(6);
  public sortList: string | undefined = "price";
  public sortOrder$ = new BehaviorSubject(SortOptions.ASC);
  public sortOptions = SortOptions;
  public keys: string[];
  public prods$: Observable<ProductState> = of(productInitialState);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    // combineLatest([this.page$, this.size$, this.sortOrder$]).subscribe(([page, size, order]) => {
    //   this.store.dispatch(CategoryActions.getProducts({
    //     page: page,
    //     size: size,
    //     sortOrder: order,
    //     sortList: this.sortList
    //   }));
    //   this.products$ = this.store.select(selectProducts);
    // })
    // this.prods$.subscribe(res => {
    // })

    this.products$ = combineLatest([of(CATEGORY_RESPONSE), this.route.queryParams, of(productInitialState)]).pipe(tap(([_, __, res]) => { this.keys = Object.keys(res); }),filter(([res, qParams, prods]) => {
      let filter = qParams['filter']
      if (filter) {
        filter = filter.split(',');
      }
      let keysCopy = [...this.keys];
      for (let key = 0; key < keysCopy.length; key++) {
        console.log(keysCopy[key]);
        let prod = res.products[+keysCopy[key]].product;
        if (prod && filter) {
          if (!(filter.includes(prod.color) || filter.includes(prod.brand))) {
            let index = this.keys.indexOf(keysCopy[key]);
            if (index > -1) {
              this.keys.splice(index, 1);
            }
          }
        }
      }
      return true;
    }), map(([res, _, __]) => {
      return res
    }))
    // this.products$ = of(CATEGORY_RESPONSE).pipe(filter(el => {
    //   if ()
    // }));
    this.prods$.subscribe(res => {
      this.keys = Object.keys(res);
    })




  }

  changeOrder($event: MatSelectChange) {
    this.sortOrder$.next($event.value);
  }

  getProduct(prods: ProductState, product: string) {
    return prods[+product].product;
  }
}
