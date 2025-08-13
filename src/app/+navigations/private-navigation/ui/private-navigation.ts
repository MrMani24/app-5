import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-private-navigation',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './private-navigation.html',
  styleUrl: './private-navigation.scss'
})
export class PrivateNavigation {

  navigation: boolean = false;

  action = 'داشبورد';


  @ViewChild('menuRef') menuRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    if (!this.navigation) return;

    if (this.menuRef && !this.menuRef.nativeElement.contains(event.target)) {
      this.navigation = false;
    }
  }
}
