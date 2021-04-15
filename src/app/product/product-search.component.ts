import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from './product';
import {FormControl} from '@angular/forms';

@Component({
selector: 'db-product-search',
templateUrl: 'app/product/product-search.component.html'
})

export class ProductSearchComponent {
	disabled: boolean=true;
	seachControl: FormControl;

	constructor(private router: Router) {}
	searchProduct(value: string) {
		this.router.navigate(['/products'],{ queryParams: { search: value} });
	}

	ngOnInit() {
		this.seachControl = new FormControl();
		this.seachControl.valueChanges.subscribe((value: string) => {
			this.searchChanged(value);
		});
	}
	searchChanged(value: string) {
		// Update the disabled property depends on value
		if (value) {
			this.disabled = false;
		} else {
			this.disabled = true;
		}
	}
}