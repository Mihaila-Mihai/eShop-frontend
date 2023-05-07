import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Category} from "../content/model";
import {categories} from "../content/categories.mock";
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  FlexibleConnectedPositionStrategyOrigin,
  Overlay,
  OverlayModule, OverlayRef
} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {LoginComponent} from "../../login/view/login.component";
import {ProductCardComponent} from "../../category/partials/product-card/product-card.component";
import {ProductGetResponse} from "../../product/store/product.state";
import {ProductModel} from "../../category/store/category.state";

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule, OverlayModule, ProductCardComponent],
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit, AfterViewInit {

  @ViewChild('element') private elem?: ElementRef;
  private overlayRef?: OverlayRef;
  constructor(private overlay: Overlay) {
  }

  public categories?: Category[];
  public isOverlayOpen?: boolean;

  ngOnInit(): void {
    this.categories = categories;

  }

  ngAfterViewInit(): void {
    const origin: FlexibleConnectedPositionStrategyOrigin = this.elem?.nativeElement;
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions([{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
      } as ConnectedPosition])
      .withPush(false);
    this.overlayRef = this.overlay.create({
      height: '400px',
      width: '600px',
      hasBackdrop: true,
      positionStrategy: positionStrategy
    });
    this.overlayRef.backdropClick().subscribe(_ => this.overlayRef?.detach());
  }

  openOverlay(category: Category) {
    this.isOverlayOpen = true;
    // this.overlayRef?.attach(new ComponentPortal(ProductCardComponent));
  }
}
