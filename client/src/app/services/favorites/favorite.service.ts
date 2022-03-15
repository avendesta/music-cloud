import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private client: HttpClient) { }

  //get all favorites from user
  getAll(userId: String) {
    return this.client.get('http://localhost:3000/favorite/user/' + userId)
  }

  //delete favorite
  postDelete(favoriteId: String) {
    return this.client.delete('http://localhost:3000/favorite/' + favoriteId)
  }

  //add favorite
  addFavorite(userId: string, musicId: string) {
    let body = {
      user: userId, musicId: musicId
    }
    return this.client.post('http://localhost:3000/favorite', body)
  }
}
