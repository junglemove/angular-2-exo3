import {
	Product,
	IProduct
} from './Product'
import {
	Bankable
} from './Bankable'
import {
	Injectable
} from '@angular/core'

@Injectable()
export class Store {
	public readonly products: IProduct[] = [];
	public readonly name: string = 'Amazing Store'

	constructor() {
		this.products.push(new Product("AA",123,"AA"));
		this.products.push(new Product("BB",123,"BB"));
		this.products.push(new Product("CC",123,"CC"));

	}

	reset(){
		this.products.splice(0,this.products.length);
	}

	addProducts(products: IProduct[] = []) {
		//this.products = this.products.concat(products)
		for (var elem of products) {
			this.products.push(elem)
		}
	}

	getProduct(id: number, client: Bankable): IProduct {
		for (let i = 0; i != this.products.length; ++i) {
			if (this.products[i].id == id) {
				let item = this.products[i]
				if (client.canPay(item.price)) {
					client.spendMoney(item.price)
					this.products.splice(i, 1)
					return item
				} else {
					console.log('Client has no money')
					return null
				}
			}
		}
		console.log('Produit indisponible')
		return null
	}

	getProductByName(name: string, client: Bankable): IProduct {
		for (let i = 0; i != this.products.length; ++i) {
			if (this.products[i].name == name) {
				let item = this.products[i]
				if (client.canPay(item.price)) {
					client.spendMoney(item.price)
					this.products.splice(i, 1)
					return item
				} else {
					console.log('Client has no money')
					return null
				}
			}
		}
		console.log('Produit indisponible')
		return null
	}
}