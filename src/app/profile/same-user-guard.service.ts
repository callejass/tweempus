import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../core/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SameUserGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if (this.authenticationService.isAuthenticated()) {
      // compruebo que el parametro :id de la url coincida con el id del usuario logado
      const idlogado = this.authenticationService.getLoggedAuthorId();
      const idurl = route.parent.params['id'];
      if (idlogado === idurl) {
        return true;
      } else {
        this.authenticationService.logout();
        // this.router.navigate(['/login']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
