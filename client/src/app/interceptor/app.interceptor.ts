import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/util/utils.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private utilService: UtilsService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let sessionToken = this.utilService.getSession() || ''
    //if it is login
    if(request.url.includes("login") || request.url.includes("register")){
      return next.handle(request);
    }

    const authReq = request.clone(
      { headers: request.headers.set('auth-token', sessionToken)}
    )
    return next.handle(authReq);
  }
}
