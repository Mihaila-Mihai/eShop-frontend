import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {map, Observable, take, tap} from "rxjs";
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {StockPipePipe} from "../../pipes/stock-pipe.pipe";
import {RatingPipe} from "../../pipes/rating.pipe";
import {MatButtonModule} from "@angular/material/button";
import {ColorDotComponent} from "../../partials/color-dot/color-dot.component";
import {Store} from "@ngrx/store";
import * as CartActions from '../../../cart/store/cart.actions';
import {UserState} from "../../../store/store-files/app-store.state";
import {selectCustomer} from "../../../store/store-files/app-store.selectors";
import {AppState} from "../../../store/AppState";
import * as ProductActions from '../../store/product.actions';
import { selectProductById} from "../../store/product.selector";
import {ProductGetResponse} from "../../store/product.state";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TopBarComponent, StockPipePipe, RatingPipe, MatButtonModule, ColorDotComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product$?: Observable<ProductGetResponse | undefined>;
  public user$?: Observable<UserState>;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.user$ = this.store.select(selectCustomer);
    this.route.params.pipe(
      take(1),
      tap((params) => {
        this.product$ = this.store.select(selectProductById(params['id']))
      }),
      map(params => this.store.dispatch(ProductActions.getProduct({productId: params['id']})))
    ).subscribe();
  }

  addToCart(productId: number) {
    this.store.dispatch(CartActions.addProductToCart({productId}));
  }
}
