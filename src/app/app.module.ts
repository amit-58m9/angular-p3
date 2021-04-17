import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy ,PathLocationStrategy} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
/**
* Modules
*/
import { CategoryModule } from './category/category.module';
import {ProductModule} from './product/product.module';
import { CartModule } from './cart/cart.module';

/*
* Components
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';
/*
* Routing
*/
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,CheckoutViewComponent
  ],
  imports: [
    BrowserModule,CartModule,FormsModule, ReactiveFormsModule,
    AppRoutingModule,CategoryModule, ProductModule,RouterModule],
 
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
