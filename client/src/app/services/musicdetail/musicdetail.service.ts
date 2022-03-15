import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicdetailService {

  constructor(private client:HttpClient) { }


  //get all favorites from user
  getByMusicId(musicId: String) {
    return this.client.get('http://localhost:3000/music/' + musicId)
  }

  //delete favorite
  postDelete(favoriteId: String){
    return this.client.delete('http://localhost:3000/favorite/' + favoriteId)
  }
}
