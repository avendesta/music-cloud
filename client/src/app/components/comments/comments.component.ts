import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  myForm!: FormGroup

  constructor(private serviceComment: CommentService, private fb: FormBuilder) {
    this.myForm = fb.group({
      'comment': ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.serviceComment.getComments('622f6ae1b59e5486dee9d39f').subscribe((res)=> {
      console.log("comment list:", res)
    })
  }

  sendComment() {

    let comment = this.myForm.get('comment')?.value
    let userId = '622f6967476b268f715f1c5d'
    let musicId = '622f6ae1b59e5486dee9d39f'

    this.serviceComment.setComment(userId, musicId, comment).subscribe((res)=>{
      console.log("sent comment done!")
    })
  }
}
