import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {Observable, of} from "rxjs";
import {ORDER_MOCK} from "../../content/orders.mock";
import {MatExpansionModule} from "@angular/material/expansion";
import {AppState} from "../../../store/AppState";
import {Store} from "@ngrx/store";
import * as OrdersActions from "../../store/order.actions";
import {selectOrders} from "../../store/order.selectors";
import {OrdersResponse} from "../../store/order.state";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, TopBarComponent, MatExpansionModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders$?: Observable<OrdersResponse | undefined>;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(OrdersActions.getOrders());
    this.orders$ = this.store.select(selectOrders);
  }
}
