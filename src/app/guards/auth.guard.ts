import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.serivce';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    if (url.startsWith('/')) {
      return this.authService.isLoggedIn();
    }

    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
