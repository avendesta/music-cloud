import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private client: HttpClient) { }

  //get all music
    getAll() {
      // assuming it returns {status: true, data: [...]}
      return this.client.get('http://localhost:3000/music/')
    }
}
