import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductGetResponse, ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {StockPipePipe} from "../../pipes/stock-pipe.pipe";
import {RatingPipe} from "../../pipes/rating.pipe";
import {MatButtonModule} from "@angular/material/button";
import {ColorDotComponent} from "../../partials/color-dot/color-dot.component";
import {Store} from "@ngrx/store";
import * as CartActions from '../../../cart/store/cart.actions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TopBarComponent, StockPipePipe, RatingPipe, MatButtonModule, ColorDotComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product$: Observable<ProductGetResponse> | undefined;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store) {
  }
  ngOnInit() {
    this.product$ = this.route.params.pipe(switchMap(params => this.productService.getProduct(params['id']))); // todo - manage from state
  }

  addToCart(productId: number) {
    this.store.dispatch(CartActions.addProductToCart({productId}));
  }
}
