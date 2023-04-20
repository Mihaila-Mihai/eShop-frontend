import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {ProductModel} from "../../store/category.state";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  public product: ProductModel | undefined;
  public stockState: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.stockState = this.product?.stock && this.product.stock > 0 ? "În stoc" : "Stoc epuizat";
  }


  navigate() {
    this.router.navigate(['product', this.product?.productId])
  }
}
