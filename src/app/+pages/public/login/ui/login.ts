import { Component, inject, OnInit } from '@angular/core';
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
export class Login implements OnInit {
  ngOnInit(): void {
    this.refresh()
  }
  router = inject(Router)
  auth = inject(Servic)
  dashbord = inject(DashbordServic);
  dataSource: any;
  massage0: string = ''
  massage1: string = ''
  async refresh() {
    this.dataSource = await this.auth.LUP();
  }
  login: login = {
    username: '',
    password: '',
    keepme: false
  }
  isValid() {
    let a = this.dataSource.findIndex((m: { username: string; }) => m.username == this.login.username.trim())
    let b = this.dataSource.findIndex((m: { password: string; }) => m.password == this.login.password.trim())
    let count = this.getItem(this.dataSource)
    if (a == -1) {
      this.massage0 = "نام کاربری نادرست است"
    }
    if (b == -1) {
      this.massage1 = "کلمه عبور نادرست است"
    }
    if (count == 0) {
      this.go2()
    }
    if (a != -1 && b != -1 && count != 0) {
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
