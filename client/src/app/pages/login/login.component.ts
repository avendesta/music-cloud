import { Component, OnDestroy, OnInit } from '@angular/core';
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
        this.router.navigate(['/home']);
      }
    })
  }

  // notBadValidator(control: FormControl): { [s: string]: boolean } | null {
  //   if (control.value === 'bad') {
  //     return { example: true };
  //   }
  //   return null;
  // }
  
  //   loginValidator(control: FormControl): Promise<any> | Observable<any> {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       // this.myForm.get().disable()   fail;
  //       if (control.value === 'bad@bad.com') resolve({ example: true }) // invalid
  //       resolve(null) // valid
  //     }, 5000);
  //   })
  // }
}
