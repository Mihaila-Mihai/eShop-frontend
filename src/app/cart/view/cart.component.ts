import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TopBarComponent} from "../../top-bar/view/top-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {CartGetResponse, CartService} from "../service/cart.service";
import {Observable} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CartProductComponent} from "../partials/cart-product/cart-product.component";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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

  public cart$?: Observable<CartGetResponse>;
  constructor(private cartService: CartService, private fb: FormBuilder) {
  }

  get voucher() {
    return this.voucherForm.get('voucher');
  }

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
  }

  removeVoucher() {
    console.log("remove voucher");
  }

  applyVoucher() {

  }
}
