import {Component, OnInit} from '@angular/core';
import {CategoryService, SortOptions} from "../service/category.service";
import {Observable} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ProductCardComponent} from "../partials/product-card/product-card.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [
    AsyncPipe,
    CommonModule,
    ProductCardComponent
  ],
  standalone: true
})
export class CategoryComponent implements OnInit {
  public products$: Observable<any> | undefined;
  public page = 0;
  public size = 2;
  public sortList: string | undefined;
  public sortOrder: SortOptions = SortOptions.ASC;
  constructor(private categoryService: CategoryService) {
  }

  public ngOnInit() {
    this.products$ = this.categoryService.getProducts(this.page, this.size, this.sortOrder, this.sortList);
  }
}
