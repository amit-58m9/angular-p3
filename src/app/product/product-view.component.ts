import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from './product.service';
import { Cart, CartItem, CartService } from '../cart/cart.service';

@Component({
	selector: 'db-product-view',
	templateUrl: 'app/product/product-view.component.html'
})

export class ProductViewComponent {
	product: Product;
	cartItem: CartItem;
	private cartService: CartService= new CartService();
	private productService: ProductService= new ProductService();
	get quantity(): number {
		return this.cartItem ? this.cartItem.count : 0;
	}

	get amount(): number {
		return this.cartItem ? this.cartItem.amount : 0;
	}

	constructor(private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			// Get the product id
			let id: string = params['id'];
			// Return the product from ProductService
			this.product = this.productService.getProduct(id);
			// Return the cart item
			this.cartItem = this.cartService.findItem(id);
		});
	}

	addToCart() {
		this.cartItem = this.cartService.addProduct(this.product);
	}

	removeFromCart() {
		this.cartItem = this.cartService.removeProduct(this.product);
	}
}