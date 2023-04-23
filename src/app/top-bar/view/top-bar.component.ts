import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import {selectCustomerName} from "../../store/store-files/app-store.selectors";
import {take, takeUntil} from "rxjs";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DestroyableComponent} from "../../helpers/destroyable.component";
import * as LoginActions from "../../login/store/login.actions";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent extends DestroyableComponent implements OnInit {
  public authenticated = false;
  public customerName?: string;

  constructor(private router: Router, private store: Store<AppState>, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.store.select(selectCustomerName).pipe(takeUntil(this.destroyed$)).subscribe(customerName => {
      this.customerName = customerName;
      this.authenticated = !!customerName;
      this.cd.detectChanges();

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

  logout() {
    this.store.dispatch(LoginActions.logOut());
  }
}
