import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) { }

  // login with email and password
    login(email: string, password: string) {
      return this.client.post('http://localhost:3000/users/login/', { email, password })
    }
}
