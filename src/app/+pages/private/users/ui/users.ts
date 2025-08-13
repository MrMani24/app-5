import { Component, inject } from '@angular/core';
import { person, Servic } from '../../../public/sharde/servic';
import { EditorUsers } from "./editor-users/editor-users";
import { AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [EditorUsers],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  member = inject(Servic);
  action = 'list';
  selected: person | undefined;
  selsctedId = 0
  isModel: boolean = false;
  isDelete: boolean = false
  removeUser: string = ''
   ok(b: person) {
    if (this.action == 'create') {
       this.member.add(b)
    }
    else if (this.action == 'edit') {
       this.member.edit(b, this.selsctedId)
    }
    this.action = 'list';
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

    this.removeUser = person.FirstName + ' ' + person.LastName

    const confirmed = await this.waitForDeleteConfirm();
    
    
    if (!confirmed) {
      return;
    }
    this.selsctedId = person.id
    this.member.delete(person, this.selsctedId);
    this.isModel = false;
    this.isDelete =false;
  }

  edit(person: person) {
    this.action = 'edit';
    this.selected = { ...person };
    this.selsctedId = person.id
  }

}
