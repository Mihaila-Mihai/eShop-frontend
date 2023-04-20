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

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [
    AsyncPipe,
    CommonModule,
    ProductCardComponent,
    TopBarComponent,
    PaginationComponent
  ],
  standalone: true
})
export class CategoryComponent implements OnInit {
  public products$?: Observable<ProductsResponse | undefined>;
  public page$ = new BehaviorSubject<number>(0);
  public size$: Observable<number> = of(6);
  public sortList: string | undefined;
  public sortOrder: SortOptions = SortOptions.ASC;

  constructor(private store: Store<AppState>) {
  }

  public ngOnInit() {
    combineLatest([this.page$, this.size$]).subscribe(([page, size]) => {
      this.store.dispatch(CategoryActions.getProducts({
        page: page,
        size: size,
        sortOrder: this.sortOrder,
        sortList: this.sortList
      }));
      this.products$ = this.store.select(selectProducts);
    })
  }
}
