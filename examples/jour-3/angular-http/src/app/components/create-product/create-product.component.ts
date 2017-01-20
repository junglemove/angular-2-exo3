import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store';
import { Product } from '../../models/product';
import { ContainerService } from '../../services/container.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

	constructor(private store: Store, private controller:ContainerService) {

	}

	ngOnInit() {
	}

	onClick(name, type, price){
		this.store.addProducts([ new Product(name, type, price) ])
		this.controller.create(this.store.products);
	}

}
