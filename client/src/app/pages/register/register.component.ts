import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from "rxjs";
import { RegisterService } from 'src/app/services/register/register.service';
import { UtilsService } from 'src/app/services/util/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  res$!: Subscription
  myForm: FormGroup;
  cssValidator!: String
  textValidator!: String
  constructor(private router: Router, private service: RegisterService, private formBuilder: FormBuilder, private utilService: UtilsService) {
    this.myForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });

  }
  ngOnDestroy(): void {
    if (this.res$ != null)
      this.res$.unsubscribe()
  }

  onSubmit() {
    this.service.register(this.myForm.value['email'], this.myForm.value['password'], this.myForm.value['username']).subscribe({
      next: (res: any) => {
        if (!res['status']) {
          this.cssValidator = 'danger'
          this.textValidator = res['message']
        } else {
          this.cssValidator = 'success'
          this.textValidator = ''

          //save empty token
          this.utilService.setSession('')
          this.router.navigate(['/home']);
        }
      },
      error: (err: any) => {
        this.cssValidator = 'danger'
        this.textValidator = err.error.data
        console.log(err.error.data)
      },
      complete: () => { }
    })
  }
}
