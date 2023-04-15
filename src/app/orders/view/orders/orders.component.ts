import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {Observable, of} from "rxjs";
import {OrdersResponse, OrdersService} from "../../service/orders.service";
import {ORDER_MOCK} from "../../content/orders.mock";
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, TopBarComponent, MatExpansionModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders$?: Observable<OrdersResponse>;


  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {

    this.orders$ = this.ordersService.getOrders("1");
  }
}
