import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private client: HttpClient) { }

  //add comment
  setComment(userId: string, musicId: string, comment: string){
    let body = { author: userId, underMusic: musicId, content: comment}

    return this.client.post('http://localhost:3000/comments', body)
  }

  //get comments
  getComments(musicId: string) {
    return this.client.get('http://localhost:3000/comments/music/' + musicId)
  }
}
