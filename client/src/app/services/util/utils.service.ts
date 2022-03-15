import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  setSession(token: string) {
    sessionStorage.setItem('token', token)
  }

  getSession() {
    return sessionStorage.getItem('token')?.toString()
  }

  removeSession() {
    sessionStorage.removeItem('token')
  }

  getUserId(){
    const token = this.getSession() || ""
    const decodedToken:any = JSON.parse(atob(token.split('.')[1]))
    const userId = decodedToken["_id"]
    return userId
  }
}
