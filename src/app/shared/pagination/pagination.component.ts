import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page} from "../../category/content/model";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  public currentPage: number = 0;

  @Input()
  public paginationInfo: Page | undefined;

  @Output() public onNavigation = new EventEmitter();

  ngOnInit() {
    // this.currentPage = 0;
  }

  changePage(page: number) {
    this.onNavigation.next(page);
  }
}
