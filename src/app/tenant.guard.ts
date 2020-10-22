import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantGuard implements CanActivate {

  /**
   *
   */
  constructor(private router: Router) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const name = route.paramMap.get('name');
    console.log('guarding tenant with name ' + name);

    if(name === 'joe'){
      this.router.navigate(['../invalid-tenant']);
    }

    return true;
  }

}
