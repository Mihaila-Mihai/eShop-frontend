import {Component, OnInit} from '@angular/core';
import {CategoryService, SortOptions} from "../service/category.service";
import {BehaviorSubject, combineLatest, Observable, of, Subject, switchMap} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ProductCardComponent} from "../partials/product-card/product-card.component";
import {ProductMock} from "../content/product.mock";
import {TopBarComponent} from "../../top-bar/view/top-bar.component";
import {PaginationComponent} from "../../shared/pagination/pagination.component";

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
  public products$: Observable<any> | undefined;
  public page$ = new BehaviorSubject<number>(0);
  public size$: Observable<number> = of(6);
  public sortList: string | undefined;
  public sortOrder: SortOptions = SortOptions.ASC;
  constructor(private categoryService: CategoryService) {
  }

  public ngOnInit() {
    this.products$ = combineLatest([this.page$, this.size$]).pipe(switchMap(([page, size]) => {
      return this.categoryService.getProducts(page, size, this.sortOrder, this.sortList);
    }))
  }
}
