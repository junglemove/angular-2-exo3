import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '../models/store';

@Injectable()
export class AuthChecker implements CanActivate {
  
	constructor(private router: Router, private store: Store) {}

	// Auth service used to validate the app.module path: 'admin/:data' route (l.29)

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
		//Check user token in real life
		console.log(this.store);
		if(this.store.products.length > 5)
			return true;
		else
			return false
	}
}
