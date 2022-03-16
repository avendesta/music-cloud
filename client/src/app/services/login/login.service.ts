import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogged = new EventEmitter()

  constructor(private client: HttpClient) { }

  // login with email and password
    login(email: string, password: string) {
      return this.client.post('http://localhost:3000/users/login/', { email, password })
    }
}
