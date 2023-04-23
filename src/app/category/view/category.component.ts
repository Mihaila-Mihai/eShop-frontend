import {Component, OnInit} from '@angular/core';
import {CategoryService, SortOptions} from "../service/category.service";
import {BehaviorSubject, combineLatest, Observable, of, Subject, switchMap} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ProductCardComponent} from "../partials/product-card/product-card.component";
import {ProductMock} from "../content/product.mock";
import {TopBarComponent} from "../../top-bar/view/top-bar.component";
import {PaginationComponent} from "../../shared/pagination/pagination.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import * as CategoryActions from "../store/category.actions";
import {ProductsResponse} from "../store/category.state";
import {selectProducts} from "../store/category.selectors";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [
    AsyncPipe,
    CommonModule,
    ProductCardComponent,
    TopBarComponent,
    PaginationComponent,
    MatFormFieldModule,
    MatSelectModule
  ],
  standalone: true
})
export class CategoryComponent implements OnInit {
  public products$?: Observable<ProductsResponse | undefined>;
  public page$ = new BehaviorSubject<number>(0);
  public size$: Observable<number> = of(6);
  public sortList: string | undefined = "price";
  public sortOrder$ = new BehaviorSubject(SortOptions.ASC);
  public sortOptions = SortOptions;

  constructor(private store: Store<AppState>) {
  }

  public ngOnInit() {
    combineLatest([this.page$, this.size$, this.sortOrder$]).subscribe(([page, size, order]) => {
      this.store.dispatch(CategoryActions.getProducts({
        page: page,
        size: size,
        sortOrder: order,
        sortList: this.sortList
      }));
      this.products$ = this.store.select(selectProducts);
    })
  }

  changeOrder($event: MatSelectChange) {
    this.sortOrder$.next($event.value);
  }
}
