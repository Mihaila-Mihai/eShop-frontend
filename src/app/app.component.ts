import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login/service/login.service";
import {Store} from "@ngrx/store";
import {AppState} from "./store/AppState";
import * as AppStoreActions from "./store/store-files/app-store.actions";
import {selectCustomerName} from "./store/store-files/app-store.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private loginService: LoginService) {
  }
    ngOnInit() {
    this.store.dispatch(AppStoreActions.getUser());
    }
}
