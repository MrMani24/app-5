import { Component, ElementRef, Input, EventEmitter, HostListener, Output, ViewChild, OnChanges, SimpleChanges, output } from '@angular/core';
import { person } from '../../../../public/sharde/servic';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor-users',
  imports: [FormsModule],
  templateUrl: './editor-users.html',
  styleUrl: './editor-users.scss'
})
export class EditorUsers implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      if (this.action == 'create') {
        this.current = undefined
      }
      else{
        this.data = this.current;
      }
    }

  }
  isclick: boolean = false;
  @Output() onCancel = new EventEmitter()
  @Input() current: person | undefined;
  @Output() onOk = new EventEmitter<person>()
  @Input() action: string | undefined
  ok() {
    switch (this.data.wealth) {
      case 'رئیس اتحادیه':
        this.data.wealth = 'رئیس اتحادیه'
        break;
      case 'نایب رئیس':
        this.data.wealth = 'نایب رئیس'
        break;
      case 'خزانه دار':
        this.data.wealth = 'خزانه دار'
        break;
      case 'مدیر اجرایی':
        this.data.wealth = 'مدیر اجرایی'
        break;
      case 'رئیس کمیسیون رسیدگی به شکایات':
        this.data.wealth = 'رئیس کمیسیون رسیدگی به شکایات'
        break;
      case 'کارمند اتحادیه':
        this.data.wealth = 'کارمند اتحادیه'
        break;
      case 'رئیس کمیسیون آموزش':
        this.data.wealth = '>رئیس کمیسیون آموزش'
        break;
      default:
        break;
    }
    this.onOk.emit(this.data);
  }
  click() {
    this.isclick = !this.isclick;
  }

  data: person = {
    id: 0 ,
    FirstName: '',
    LastName: '',
    userName: '',
    password: '',
    title: '',
    wealth: '...',
    img: 'person.webp',
  }
  @ViewChild('menuRef') menuRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    if (!this.isclick) return;

    if (this.menuRef && !this.menuRef.nativeElement.contains(event.target)) {
      this.isclick = false;
    }
  }
}
