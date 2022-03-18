import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private client: HttpClient) { }

  // register with email and password
  register(email: string, password: string, username: string) {
    return this.client.post('http://localhost:3000/users/register/', { email, password, username })
  }
}
