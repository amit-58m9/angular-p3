import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductViewComponent} from './product/product-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';
import {CartViewComponent} from './cart/cart-view.component';

const routes: Routes = [
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{path: 'welcome', component: WelcomeComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'products/:id', component: ProductViewComponent },
{ path: 'cart', component: CartViewComponent },
{ path: 'checkout', component: CheckoutViewComponent }
// { path: 'products/:id', component: ProductComponent }
];

export const routing = RouterModule.forRoot(routes);