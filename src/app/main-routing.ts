import {Route, Routes} from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'home'
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
    loadComponent: () => import('./category/view/category.component').then((m) => m.CategoryComponent)
  }
];
