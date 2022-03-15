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
}
