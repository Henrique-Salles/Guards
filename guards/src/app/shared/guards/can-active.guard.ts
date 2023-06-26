import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class canActiveGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (
      route.queryParams['account'] === 'admin' &&
      route.queryParams['password'] === '1234'
    ) {
      console.log(state);
      console.log(route);
      return true;
    }
    console.log(state);
    console.log(route);
    return false;
  }
}
