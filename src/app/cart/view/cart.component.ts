import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "../../top-bar/view/nav-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {Observable, of, takeUntil} from "rxjs";
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
import {Cart, Courier, DeliveryAddress, DeliveryMethod, Item} from "../content/model";
import {CartItemQuantity} from "../partials/cart-item-quantity/cart-item-quantity";
import {MatSelectModule} from "@angular/material/select";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {FLAG} from "../content/icons";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {Product} from "../../product/content/model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, NavBarComponent, MatButtonModule, MatFormFieldModule, CartProductComponent, MatInputModule, ReactiveFormsModule, CartItemQuantity, MatSelectModule, MatIconModule, MatSlideToggleModule]
})
export class CartComponent extends DestroyableComponent implements OnInit {

  public selected = true;
  public DeliveryMethod = DeliveryMethod;
  public courier = Courier;

  public voucherForm: FormGroup = this.fb.group({
    voucher: ['', [Validators.required]]
  })

  public addressForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email]],
    phoneNumber: ['', Validators.required],
    country: ['', Validators.required],
    district: ['', Validators.required],
    city: ['', Validators.required],
    streetAndNumber: ['']
  })
  public openForm = false;

  get firstName() {
    return this.addressForm.get('firstName');
  }
  get lastName() {
    return this.addressForm.get('lastName');
  }
  get email() {
    return this.addressForm.get('email');
  }
  get phoneNumber() {
    return this.addressForm.get('phoneNumber');
  }
  get country() {
    return this.addressForm.get('country');
  }
  get district() {
    return this.addressForm.get('district');
  }
  get city() {
    return this.addressForm.get('city');
  }
  get streetAndNumber() {
    return this.addressForm.get('streetAndNumber');
  }

  public cart$: Observable<Cart>;

  public error: string;
  public keys: string[];

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>, private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    super();
  }

  get voucher() {
    return this.voucherForm.get('voucher');
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIconLiteral("flag", this.domSanitizer.bypassSecurityTrustHtml(FLAG));

    this.cart$ = this.store.select(selectCart);

    this.cart$.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      if (res.items) {
        this.keys = Object.keys(res.items);
      }
    })
    // this.cart$ = this.store.select(selectCart);
    // this.store.dispatch(CartActions.getCart());
  }

  removeVoucher() {
    this.store.dispatch(CartActions.removeVoucher());
    this.voucherForm.patchValue({
      voucher: ''
    })
  }

  applyVoucher() {
    if (this.voucherForm.get('voucher')?.value && this.voucherForm.get('voucher')?.valid) {
      this.store.dispatch(CartActions.applyVoucher({ id: this.voucherForm.get('voucher')?.value }));
    }
  }

  placeOrder() {
    this.store.dispatch(CartActions.placeOrder());
  }

  deleteCart() {
    this.store.dispatch(CartActions.clearCart());
  }

  public onSubmit() {
    if (this.addressForm.valid) {
      const address: DeliveryAddress = {
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        district: this.district?.value,
        city: this.city?.value,
        street: this.streetAndNumber?.value,
        country: this.country?.value,
        phoneNumber: this.phoneNumber?.value,
        email: this.email?.value
      }

      this.store.dispatch(CartActions.saveAddress({ address: address }))

      this.openForm = false;
    }
  }

  protected readonly xhrStatus = xhrStatus;
  protected readonly Courier = Courier;

  insuranceChange($event: MatSlideToggleChange) {
    this.store.dispatch(CartActions.modifyInsurance({applied: $event.checked}))
  }

  modifyAddress(address: DeliveryAddress) {
    this.addressForm.patchValue({
      ...address
    })
    this.openForm = true;
  }

  increaseItemQuantity(item: Product) {
    this.store.dispatch(CartActions.increaseItemQuantity({productId: item.id}))
  }

  decreaseItemQuantity(item: Product) {
    this.store.dispatch(CartActions.decreaseItemQuantity({item: item}))
  }

  nagivateToProduct(id: number) {
    this.router.navigate(['/product', id])
  }
}
