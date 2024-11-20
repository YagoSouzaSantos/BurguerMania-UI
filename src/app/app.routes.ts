import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuCategoryComponent } from './views/menu/menu-category/menu-category.component';
import { MenuDetailsComponent } from './views/menu/menu-details/menu-details.component';
import { MenuProductsComponent } from './views/menu/menu-products/menu-products.component';
import { MenuComponent } from './views/menu/menu.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { OrderComponent } from './views/order/order.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: 'categories',
        component: MenuCategoryComponent
      },
      {
        path: 'products/:id',
        component: MenuProductsComponent
      },
      {
        path: 'details/:id',
        component: MenuDetailsComponent
      }
    ]
  },
  {
    path: 'order',
    component: OrderComponent
  },
  // {
  //   path: 'location',
  //   component: LocationComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];
