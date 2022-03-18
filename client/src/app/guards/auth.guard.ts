import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { UtilsService } from '../services/util/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token!: string

  constructor(private service: UtilsService, private router: Router, private loginService: LoginService) {
    this.token = this.service.getSession() || ''
    this.loginService.isLogged.subscribe((res => {
      this.token = res
    }))
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.token == '')
        this.router.navigate(['/home']);
      else resolve(true)
    })
  }

}
