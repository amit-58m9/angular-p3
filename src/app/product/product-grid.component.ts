/*
* Angular Imports
*/
import {Component} from '@angular/core';
/*
* Components
*/
import {Product, getProducts} from './product';
@Component({
	selector: 'db-product-grid',
	templateUrl: 'app/product/product-grid.component.html'
})

export class ProductGridComponent {
	products: any = [];

	constructor() {
		let index = 0;
		let products: Product[] = getProducts();
		let length = products.length;
		this.products = [];
		while (length) {
			let row: Product[] = [];
			if (length >= 3) {
				for (let i = 0; i < 3; i++) {
					row.push(products[index++]);
				}
				this.products.push(row);
				length -= 3;
			} 
			else 
			{
				for (; length > 0; length--) {
					row.push(products[index++]);
				}
				this.products.push(row);
			}
		}
	}

	constructor(private router: ActivatedRouter) {
		this.router.queryParams.subscribe(params => {
			let category: string = params['category'];
			let search: string = params['search'];
			// Return filtered data from getProducts function
			let products: Product[] =getProducts(category, search);
			// Transform products to appropriate data
			// to display
			this.products = this.transform(products);
		});
	}

	addToCart(product:Product) {
			this.cartService.addProduct(product);
	}
	
	transform(source: Product[]) {
		let index = 0;
		let length = source.length;
		let products = [];
		while (length) {
			let row: Product[] = [];
			if (length >= 3) {
				for (let i = 0; i < 3; i++) {
					row.push(source[index++]);
				}
				products.push(row);
				length -= 3;
			} else {
				for (; length > 0; length--) {
					row.push(source[index++]);
				}
				products.push(row);
			}
		}
		return products;
	}
}