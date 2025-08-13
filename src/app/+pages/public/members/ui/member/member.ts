import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  imports: [],
  templateUrl: './member.html',
  styleUrl: './member.scss'
})
export class Member {
  @Input() member1 : any;
}
