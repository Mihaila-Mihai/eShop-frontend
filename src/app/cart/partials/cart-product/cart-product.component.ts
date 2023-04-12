import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartProduct} from "../../service/cart.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {
  @Input()
  public product?: CartProduct;

  constructor(private router: Router) {
  }

  goToProduct() {
    this.router.navigate(['product', this.product?.productId])
  }
}
