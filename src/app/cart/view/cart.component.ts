import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "../../top-bar/view/nav-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {Observable, takeUntil} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CartProductComponent} from "../partials/cart-product/cart-product.component";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import * as CartActions from '../store/cart.actions';
import {selectCart} from "../store/cart.selectors";
import {CartState} from "../store/cart.state";
import {CartService} from "../service/cart.service";
import {xhrStatus} from "../../store/store-files/app-store.state";
import {DestroyableComponent} from "../../helpers/destroyable.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, NavBarComponent, MatButtonModule, MatFormFieldModule, CartProductComponent, MatInputModule, ReactiveFormsModule]
})
export class CartComponent extends DestroyableComponent implements OnInit {

  public voucherForm: FormGroup = this.fb.group({
    voucher: ['', [Validators.required]]
  })

  public cart$?: Observable<CartState>;

  public error?: string;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {
    super();
  }

  get voucher() {
    return this.voucherForm.get('voucher');
  }

  ngOnInit() {
    this.cart$ = this.store.select(selectCart);
    this.store.dispatch(CartActions.getCart());
  }

  removeVoucher() {
    this.store.dispatch(CartActions.removeVoucher());
  }

  applyVoucher() {
    this.store.dispatch(CartActions.applyVoucher({ voucherCode: this.voucherForm.get('voucher')?.value }));
  }

  placeOrder() {
    this.store.dispatch(CartActions.placeOrder());
  }

  deleteCart() {
    this.store.dispatch(CartActions.clearCart());
  }

  protected readonly xhrStatus = xhrStatus;
}
