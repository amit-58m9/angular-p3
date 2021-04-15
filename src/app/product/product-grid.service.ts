import {Injectable, ReflectiveInjector} from '@angular/core';

import { OpaqueToken } from '@angular/core';


@Injectable()
export ProductGridService {
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
}

const injector = ReflectiveInjector.resolveAndCreate([ActivatedRoute, ProductGridService]);
const service = injector.get(ProductGridService);

export let APP_TITLE = new OpaqueToken('appTitle');
providers: [{ provide: APP_TITLE, useValue: 'Dream Bean' }]