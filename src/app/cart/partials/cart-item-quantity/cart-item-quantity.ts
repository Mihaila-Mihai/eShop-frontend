import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  selector: "app-cart-item-quantity",
  templateUrl: "./cart-item-quantity.html",
  styleUrls: ["./cart-item-quantity.scss"]
})
export class CartItemQuantity {
  @Input() public quantity: number;
  @Output() public decreaseQuantity = new EventEmitter();
  @Output() public increaseQuantity = new EventEmitter();

  public increase() {
    this.increaseQuantity.emit();
  }

  public decrease() {
    if (this.quantity > 1) {
      this.decreaseQuantity.emit();
    }
  }
}
