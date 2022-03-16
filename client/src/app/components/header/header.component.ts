import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UtilsService } from 'src/app/services/util/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token!: string

  constructor(private serviceUtil: UtilsService, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.token = this.serviceUtil.getSession() || ''
    this.loginService.isLogged.subscribe((res=>{
      this.token = res
    }))
  }

  logout() {
    this.token = ''
    this.serviceUtil.removeSession()
    this.route.navigate(['/home'])
  }

}
