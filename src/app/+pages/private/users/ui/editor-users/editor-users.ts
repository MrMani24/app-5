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
    this.onOk.emit(this.data);
  }
  click() {
    this.isclick = !this.isclick;
  }

  data: person = {
    id: '',
    firstname: '',
    lastname: '',
    userName: '',
    password: '',
    title: '',
    wealth: '...',
    profileImg:'',
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
