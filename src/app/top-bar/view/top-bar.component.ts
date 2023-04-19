import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import {selectCustomerName} from "../../store/store-files/app-store.selectors";
import {take} from "rxjs";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public authenticated = false;
  public customerName?: string;

  constructor(private router: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectCustomerName).pipe(take(1)).subscribe(customerName => {
      this.customerName = customerName;
      this.authenticated = !!customerName;
    })
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  authenticate() {
    if (!this.authenticated) {
      this.router.navigate(['/login']);
    }
  }
}
