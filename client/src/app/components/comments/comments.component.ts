import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  musicId!: string
  myComments: commentObj[] = []
  subscriptionAllComments!: Subscription

  constructor(private serviceComment: CommentService, private fb: FormBuilder, private serviceUtil: UtilsService, private router: ActivatedRoute) {
    this.router.params.subscribe((res: any) => {
      this.musicId = res.musicId
    })

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

    this.subscriptionAllComments = this.serviceComment.getComments(this.musicId).subscribe((res: any) => {
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
    let userId = this.serviceUtil.getUserId()
    let musicId = this.musicId

    this.serviceComment.setComment(userId, musicId, comment).subscribe((res: any) => {
      if (res.status) {
        this.myForm.reset()
        this.loadComments()
      }
    })
  }
}
