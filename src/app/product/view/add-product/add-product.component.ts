import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {ProductInfo, ProductResponse, ProductService} from "../../service/product.service";

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
    stock: ['', [Validators.required]]
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

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
  }

  onSubmit() {
    const productInfo: ProductInfo = {
      displayName: this.displayName?.value,
      price: this.price?.value,
      stock: this.stock?.value
    }
    this.productService.addProduct(productInfo).subscribe((res: ProductResponse) => {
      // console.log(res);
      this.router.navigate(['product', res.productId])
    });
  }
}
