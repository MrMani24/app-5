import { Component, inject } from '@angular/core';
import { Member } from "./member/member";
import { Servic } from '../../sharde/servic';


@Component({
  selector: 'app-members',
  imports: [Member],
  templateUrl: './members.html',
  styleUrl: './members.scss'
})
export class Members {
  member = inject(Servic);
}
