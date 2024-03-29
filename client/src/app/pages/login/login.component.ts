import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from "rxjs";
import { LoginService } from 'src/app/services/login/login.service';
import { UtilsService } from 'src/app/services/util/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnDestroy{
  res$!: Subscription
  myForm: FormGroup;
  cssValidator!: String
  textValidator!: String
  constructor(private router: Router, private service: LoginService, private formBuilder: FormBuilder, private utilService: UtilsService) {
    this.myForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });

  }
  ngOnDestroy(): void {
    if(this.res$ != null)
      this.res$.unsubscribe()
  }

  onSubmit() {
    this.service.login(this.myForm.value['email'],this.myForm.value['password']).subscribe({
      next: (res: any) => {
        if (!res['status'] ) {
          this.cssValidator = 'danger'
          this.textValidator = res['message']
        } else {
          console.log('token:', res['token'])

          //save token in session storage
          this.utilService.setSession(res['token'])
          this.service.isLogged.emit(res['token'])
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
