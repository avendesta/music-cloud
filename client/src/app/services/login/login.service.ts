import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //trying to make backend service call
  private url = 'http://localhost:4600/api/users';


  constructor(private httpclient: HttpClient) { }

 // Service route 
  loginUser(body:any): Observable<any> {
    return this.httpclient
      .post(this.url + '/login', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      });

  }

  logoutUser(userId: any) {
    console.log('logout handler service')
    return this.httpclient
      .get(this.url + `/logout`)


  }
}
