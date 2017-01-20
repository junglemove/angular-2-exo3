import {
	Injectable
} from '@angular/core';
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthCheckerService implements CanActivate {
	constructor(private router: Router) {}

	// Auth service used to validate the app.module path: 'admin/:data' route (l.29)

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
		//Check user token in real life
		if (route.params['data'] && route.params['data'] == 'admin')
			return true
		this.router.navigateByUrl('/')
		return false
	}

}