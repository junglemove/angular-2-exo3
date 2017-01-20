import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store';
import { Product } from '../../models/product';
import { Order } from '../../models/order';
import { ContainerService } from '../../services/container.service'

import * as _ from "lodash";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	selected: Product[] = []

	constructor(private store: Store,  private controller:ContainerService) {
	}

	ngOnInit() {
	}

	onOrder(order: Order, isReady: boolean, message: string) {
		console.log('onOrder', order, isReady, message)
	}

	onClick(value: string) {
		console.log('input value', value)
		console.log(this.store)
	}

	elemClicked(product: Product) {
		let idx = _.findIndex(this.selected, {
			id: product.id
		})
		if (idx == -1)
			this.selected.push(product)
		else
			this.selected.splice(idx, 1)
	}

	getProductClass(product: Product) {
		let idx = _.findIndex(this.selected, {
			id: product.id
		})
		if (idx != -1)
			return 'success'
	}

	clear() {
		this.selected = [];
		this.controller.reset();
	}

	removeAll() {
		this.selected = [];
		this.store.reset();
		this.controller.reset();
	}

	remove() {
		for (let i = 0; i != this.selected.length; ++i) {
			let idx = _.findIndex(this.store.products, {
				id: this.selected[i].id
			})
			if (idx != -1)
				this.store.products.splice(idx, 1)
		}
	}

}
