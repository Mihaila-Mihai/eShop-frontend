import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./main-routing";
import {NavBarComponent} from "./top-bar/view/nav-bar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {AppStoreModule, reducers} from "./store/store.module";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {AppStoreEffects} from "./store/store-files/app-store.effects";
import {CartEffects} from "./cart/store/cart.effects";
import {VoucherEffects} from "./voucher/store/voucher.effects";
import {ProductEffects} from "./product/store/product.effects";
import {LoginEffects} from "./login/store/login.effects";
import {RegisterEffects} from "./register/store/register.effects";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CategoryEffects} from "./category/store/category.effects";
import {OrderEffects} from "./orders/store/order.effects";
import {FooterComponent} from "./footer/footer.component";
import {register} from 'swiper/element/bundle';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';



register();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppStoreModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    NavBarComponent,
    BrowserAnimationsModule,
    HttpClientXsrfModule,
    StoreModule.forRoot(reducers),
    MatSnackBarModule,
    EffectsModule.forRoot([AppStoreEffects, CartEffects, VoucherEffects, ProductEffects, LoginEffects, RegisterEffects, CategoryEffects, OrderEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FooterComponent,
    MatIconModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
