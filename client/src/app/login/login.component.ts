import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = null;
  public pass: string = null;
  public verifiedUser: boolean = false;
  public user_id: number = null;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  public onLogin() {
    this.loginService.logUser({
      email: this.email,
      pass: this.pass
    }).subscribe(res=> {
      if (res[0]) {
        this.user_id = res[0].id
        this.verifiedUser = true;
      } else {
        alert('Wrong email or pass. Please try again!')
      }
    }, error => {
      console.log('Error:', error)
    })

  }
}
