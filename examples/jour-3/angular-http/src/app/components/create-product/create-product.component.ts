import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store';
import { Product } from '../../models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

	constructor(private store: Store) {

	}

	ngOnInit() {
	}

	onClick(name, type, price){
		this.store.addProducts([ new Product(name, type, price) ])
	}

}
