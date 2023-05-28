import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {map, Observable, take, takeUntil, tap} from "rxjs";
import {NavBarComponent} from "../../../top-bar/view/nav-bar.component";
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
import {selectProductById} from "../../store/product.selector";
import {ProductGetResponse} from "../../store/product.state";
import {ProductService} from "../../service/product.service";
import {Product} from "../../content/model";
import {SwiperDirective} from "../../../fm-swiper.directive";
import {A11y, Mousewheel, Navigation, Pagination, SwiperOptions} from "swiper";
import {DestroyableComponent} from "../../../helpers/destroyable.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {addProductToCart} from "../../../cart/store/cart.actions";
import {MatTabsModule} from "@angular/material/tabs";
import {ProductDetailsComponent} from "../../partials/details/product-details.component";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NavBarComponent, StockPipePipe, RatingPipe, MatButtonModule, ColorDotComponent, RouterLink, SwiperDirective, MatFormFieldModule, MatSelectModule, MatIconModule, ReactiveFormsModule, MatTabsModule, ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductComponent extends DestroyableComponent implements OnInit {
  public product$: Observable<Product | undefined>;

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 5,
    slidesPerView: 2,
  }

  public sizeForm: FormGroup = this.fb.group({
    size: [null, Validators.required]
  })
  public showError = false;

  get size() {
    return this.sizeForm.get('size');
  }


  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private store: Store<AppState>) {
    super();
  }

  ngOnInit() {
    this.route.params.pipe(
      takeUntil(this.destroyed$),
      tap((params) => {
        this.product$ = this.store.select(selectProductById(params['id']))
      })
    ).subscribe();
  }

  onSubmit(product: Product) {
    this.showError = false;
    if (this.size?.valid) {
      this.store.dispatch(addProductToCart({productId: this.size.value, cartSize: this.size?.value}))
    } else {
      this.showError = true;
    }
  }
}
