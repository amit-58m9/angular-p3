import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Category} from './category.service';
import {Router} from '@angular/router';

@Component({
	selector: 'db-category-card',
	templateUrl: 'app/category/category-card.component.html'
})

export class CategoryCardComponent {
	@Input() category: Category;
	@Output() select: EventEmitter<Category> = new EventEmitter<Category>();
	browse() {
		this.select.emit(this.category);
	}

	constructor(private router: Router) {}
	filterProducts(category: Category) {
		this.router.navigate(['/products'],{queryParams: { category: category.id} });
	}
}