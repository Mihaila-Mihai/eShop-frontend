import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModel} from "../../content/model";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  public product: ProductModel | undefined;

}
