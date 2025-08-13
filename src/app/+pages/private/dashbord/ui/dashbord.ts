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
export class Dashbord {
  action = inject(DashbordServic);
  data = inject(Servic);
  getObject = (index: number): person => this.data.List()[index];
}
