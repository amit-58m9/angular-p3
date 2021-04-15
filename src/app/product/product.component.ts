import {Component, Input, Output, EventEmitter} from '@angular/core';

export class Product {
	name: string;
	price: number;
}

@Component({
	selector: 'db-product',
	templateUrl: 'app/product/product.component.html'
})

export class ProductComponent {
	@Input product: Product;
	@Output() select:EventEmitter<Product> = new EventEmitter<Product>();
	browse($event) {
		this.select.emit(<Product>$event);
	}
}