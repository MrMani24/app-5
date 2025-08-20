import { Component, inject, OnInit } from '@angular/core';
import { Servic } from '../../sharde/servic';
import { Member } from "./member/member";


@Component({
  selector: 'app-members',
  imports: [Member],
  templateUrl: './members.html',
  styleUrl: './members.scss'
})
export class Members implements OnInit {
    ngOnInit(): void {
    this.refresh()
  }
  Mlist = inject(Servic)
  dataSource: any;
  async refresh() {
    this.dataSource = await this.Mlist.List();
  }
}
