import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getUserId() {
    const token = this.getSession() || ""
    let userId = ''
    try {
      const decodedToken: any = JSON.parse(atob(token.split('.')[1]))
      userId = decodedToken["_id"]
    } catch (ex) {
    }
    return userId
  }
}
