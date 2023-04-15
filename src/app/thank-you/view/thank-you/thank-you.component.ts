import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../../../top-bar/view/top-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, TopBarComponent, MatButtonModule, RouterLink],
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  public orderId$?: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.orderId$ = this.route.params.pipe(
      map(params => {
        return params['orderId'];
      }),
      tap(id => {
      if (!id) {
        this.router.navigate(['']);
      }
    }));
  }

}
