import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from "rxjs";
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnDestroy{
  res$!: Subscription
  myForm: FormGroup;
  constructor(private router: Router, private service: LoginService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });

  }
  ngOnDestroy(): void {
    this.res$.unsubscribe()
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.res$ = this.service.login(this.myForm.value['email'],this.myForm.value['password']).subscribe((res:any)=>{
      if(res['status']){
        this.saveToken(res.token)
        this.router.navigate(['/home']);
      }
    })
  }

  saveToken(token: string) {
    //save token in session storage
    sessionStorage.setItem('token', token)
  }
}
