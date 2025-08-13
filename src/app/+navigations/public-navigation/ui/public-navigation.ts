import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-navigation',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './public-navigation.html',
  styleUrl: './public-navigation.scss'
})
export class PublicNavigation {
  router = inject(Router);
  go() {
    this.router.navigateByUrl('/login');
  }
}
