import { Component, inject, OnInit } from '@angular/core';
import { DashbordServic } from '../dashbord-services/dashbord-servic';
import { person, Servic } from '../../../public/sharde/servic';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-dashbord',
  imports: [],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.scss'
})
export class Dashbord implements OnInit {
  ngOnInit(): void {
    this.refresh()
  }
  dataSource: any;
  async refresh() {
    this.dataSource = await this.data.List();
  }
  action = inject(DashbordServic);
  data = inject(Servic);
  getObject = (index: number): person => this.dataSource[index];
}
