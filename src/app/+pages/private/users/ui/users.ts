import { Component, inject, OnInit } from '@angular/core';
import { person, Servic } from '../../../public/sharde/servic';
import { EditorUsers } from "./editor-users/editor-users";
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [EditorUsers],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users implements OnInit {
  ngOnInit(): void {
    this.refresh()
  }
  member = inject(Servic);
  action = 'list';
  selected: person | undefined;
  selsctedId: string = ''
  isModel: boolean = false;
  isDelete: boolean = false
  removeUser: string = ''
  dataSource: any;
  async refresh() {
    this.dataSource = await this.member.List();
  }
  async ok(b: person) {
    if (this.action == 'create') {
      await this.member.add(b)
    }
    else if (this.action == 'edit') {
      await this.member.edit(b, this.selsctedId)
    }
    this.action = 'list';
    this.refresh()
  }
  create() {
    this.action = 'create'
  }

  cancel() {
    this.selected = undefined;
    this.action = 'list';
  }

  waitForDeleteConfirm(): Promise<boolean> {
    return new Promise((resolve) => {
      const check = () => {
        if (this.isDelete === true) {
          resolve(true);
        } else if (this.isDelete === false && this.isModel === false) {
          resolve(false);
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  }

  async remove(person: person) {
    this.isModel = true;

    this.removeUser = person.firstname + ' ' + person.lastname

    const confirmed = await this.waitForDeleteConfirm();

    if (!confirmed) {
      return;
    }
    this.selsctedId = person.id
    await this.member.delete(this.selsctedId);
    this.refresh()
    this.isDelete = false;
  }

  edit(person: person) {
    this.action = 'edit';
    this.selected = { ...person };
    this.selsctedId = person.id
  }

}
