import {Route, Routes} from "@angular/router";
import {ProductComponent} from "./product/view/product-page/product.component";
import {AddProductComponent} from "./product/view/add-product/add-product.component";

export const routes: Route[] = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'products'
  },
  {
    path: 'home',
    loadComponent:() =>import('./homepage/view/homepage.component').then((m) => m.HomepageComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/view/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./category/view/category.component').then((m) => m.CategoryComponent),
  },
  {
    path: 'product',
    children: [
      {
        path: '',
        loadComponent: () => import('./product/view/add-product/add-product.component').then((m) => m.AddProductComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./product/view/product-page/product.component').then((m) => m.ProductComponent)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/view/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'cos',
    loadComponent: () => import('./cart/view/cart.component').then((m) => m.CartComponent)
  }
];
