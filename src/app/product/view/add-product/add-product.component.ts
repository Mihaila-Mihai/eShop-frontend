import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {ProductInfo, ProductPostResponse} from "../../store/product.state";
import {AppState} from "../../../store/AppState";
import {Store} from "@ngrx/store";
import * as ProductActions from "../../store/product.actions";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, TopBarComponent],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public form: FormGroup = this.fb.group({
    displayName: ['', [Validators.required]],
    price: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    details: this.fb.group({
      color: ['', Validators.required],
      storageCapacity: ['', Validators.required],
      brand: ['', Validators.required],
      otherColor: ['', Validators.required],
      rating: ['', Validators.required]
    })
  });
  get displayName() {
    return this.form.get('displayName');
  }

  get price() {
    return this.form.get('price');
  }

  get stock() {
    return this.form.get('stock');
  }
  get color() {
    return this.form.get('details.color');
  }
  get storageCapacity() {
    return this.form.get('details.storageCapacity');
  }
  get brand() {
    return this.form.get('details.brand');
  }
  get otherColor() {
    return this.form.get('details.otherColor');
  }
  get rating() {
    return this.form.get('details.rating');
  }

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {
  }

  onSubmit() {
    const productInfo: ProductInfo = {
      displayName: this.displayName?.value,
      price: this.price?.value,
      stock: this.stock?.value,
      details: {
        color: this.color?.value,
        storageCapacity: this.storageCapacity?.value,
        brand: this.brand?.value,
        otherColors: this.otherColor?.value,
        rating: +this.rating?.value
      }
    }
    this.store.dispatch(ProductActions.addProduct({ productInfo: productInfo }));
  }
}
