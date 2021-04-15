import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductCardComponent} from './product-card.component';
import {ProductSearchComponent} from './product-search.component';
import {ProductGridComponent} from './product-grid.component';
import {ProductViewComponent} from './product-view.component';

import {CategoryModule} from '../category/category.module';

import {ProductService} from './product.service';

@NgModule({
	imports: [CommonModule, FormsModule, RouterModule, CategoryModule],
	declarations: [ProductListComponent, ProductCardComponent,ProductSearchComponent,  ProductViewComponent,ProductGridComponent],
	exports: [ProductListComponent, ProductCardComponent,ProductSearchComponent, ProductViewComponent,ProductGridComponent],
	providers: [ProductService]
})

export class ProductModule {}