import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../models/model';
import { Servic } from '../../sharde/servic';
import { FormsModule } from '@angular/forms';
import { DashbordServic } from '../../../private/dashbord/dashbord-services/dashbord-servic';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  router = inject(Router)
  auth = inject(Servic)
  dashbord = inject(DashbordServic);
  count = this.getItem(this.auth.List())
  massage0: string = ''
  massage1: string = ''
  login: login = {
    username: '',
    password: '',
    keepme: false
  }
  isValid() {
    let a = this.auth.List().findIndex(m => m.userName == this.login.username.trim())
    let b = this.auth.List().findIndex(m => m.password == this.login.password.trim())
    if (a == -1) {
      this.massage0 = "نام کاربری نادرست است"
    }
    if (b == -1) {
      this.massage1 = "کلمه عبور نادرست است"
    }
    if (this.count == 0) {
      this.go2()
    }
    if (a != -1 && b != -1 && this.count != 0) {
      this.dashbord.number = a;
      this.go()
    }
  }
  go() {
    this.router.navigateByUrl('/p010203')
  }
  go2() {
    this.router.navigateByUrl('/p010203/users')
  }
  back() {
    this.router.navigateByUrl('/public')
  }
  getItem(data: any[]): number {
    return data.length
  }
}
