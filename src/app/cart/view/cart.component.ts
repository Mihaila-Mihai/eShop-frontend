import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TopBarComponent} from "../../top-bar/view/top-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {Observable} from "rxjs";
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

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, TopBarComponent, MatButtonModule, MatFormFieldModule, CartProductComponent, MatInputModule, ReactiveFormsModule]
})
export class CartComponent implements OnInit {

  public voucherForm: FormGroup = this.fb.group({
    voucher: ['', [Validators.required]]
  })

  public cart$?: Observable<CartState>;
  constructor(private cartService: CartService, private fb: FormBuilder, private router: Router, private store: Store<AppState>) {
  }

  get voucher() {
    return this.voucherForm.get('voucher');
  }

  ngOnInit() {
    this.cart$ = this.store.select(selectCart);
    this.store.dispatch(CartActions.getCart$());
  }

  removeVoucher() {
    console.log("remove voucher");
  }

  applyVoucher() {
    this.store.dispatch(CartActions.applyVoucher({ voucherCode: this.voucherForm.get('voucher')?.value }));
  }

  placeOrder() {
    this.cartService.placeOrder().subscribe(res => { //todo - manage from state
      this.router.navigate(['comanda-confirmata', '1'])
    });
  }
}
