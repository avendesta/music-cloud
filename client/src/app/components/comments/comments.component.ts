import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/services/comment/comment.service';
import { UtilsService } from 'src/app/services/util/utils.service';

export interface commentObj {
  user: String;
  email: String;
  date: string;
  comment: string
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  token!: string
  myForm!: FormGroup
  myComments: commentObj[] = []
  subscriptionAllComments!: Subscription

  constructor(private serviceComment: CommentService, private fb: FormBuilder, private serviceUtil: UtilsService) {
    this.myForm = fb.group({
      'comment': ['', Validators.required]
    })
    this.token = this.serviceUtil.getSession() || ''
  }
  ngOnDestroy(): void {
    this.subscriptionAllComments.unsubscribe()
  }

  ngOnInit(): void {
    this.loadComments()
  }

  loadComments() {
    this.myComments = []

    this.subscriptionAllComments = this.serviceComment.getComments('622f6ae1b59e5486dee9d39f').subscribe((res: any) => {
      console.log("comment list:", res.data)
      res.data.forEach((elem: any) => {
        this.myComments.push({
          user: elem.author.username,
          email: elem.author.email,
          comment: elem.content,
          date: elem.createdAt
        })
      })
    })
  }

  sendComment() {

    let comment = this.myForm.get('comment')?.value
    let userId = '622f6967476b268f715f1c5d'
    let musicId = '622f6ae1b59e5486dee9d39f'

    this.serviceComment.setComment(userId, musicId, comment).subscribe((res: any) => {
      if (res.status) {
        this.myForm.reset()
        this.loadComments()
      }
    })
  }
}
