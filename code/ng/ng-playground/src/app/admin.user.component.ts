import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

export interface User {
  name: string;
  login: string;
  group: string;
}

export class Column {
  name: string;
  sortable: boolean;
  searchable: boolean;
  type: string;

  constructor(name: string, sortable: boolean, searchable: boolean, type: string) {
    this.name = name;
    this.sortable = sortable;
    this.searchable = searchable;
    this.type = type;
  }
}

@Component({
  selector: 'app-admin-user',
  template: `
  <div>
    <app-master [titles]='titles' (send)='clicked()'></app-master>
    <app-title>
      <h1>{{title}}</h1>
    </app-title>
    <app-table [columns]='columns' [data]='users'></app-table>
    <app-button-bar>
         <app-button (send)='search()' title='Suchen'></app-button>
         <app-button (send)='all()' title='Alle'></app-button>
         <app-button (send)='reset()' title='Zürücksetzen'></app-button>
    </app-button-bar>
    <app-detail [element]='selectedUser' (saveEvent)='saveUser($event)'></app-detail>
  </div>`
  // template: `<div>
  // <app-master>
  // Olli:
  //   <app-title>
  //   <h1>{{title}}</h1>
  // Arjan:
  //   <app-button-bar>
  //     <app-button (send)='search()' title='Suchen'></app-button>
  //     <app-button (send)='all()' title='Alle'></app-button>
  //     <app-button (send)='reset()' title='Zürücksetzen'></app-button>
  //   </app-button-bar>
  //   </app-title>
  // Susanne:
  //   <app-table columns={{columns}} data={{users}}></app-table>
  // </app-master>
  // Marcel:
  // <app-detail>
  // Dani:
  // <app-pw></app-pw>
  // </app-detail>
  // </div>`
})
export class AdminUserComponent {
  private title = 'Benutzerverwaltung';
  private titles = [{name: 'olli'}, {name: 'Opa'}];
  private users: User[];
  private columns: Column[];
  private selectedUser: User = {name: 'marcel', group: 'faf', login: 'fa'};

  constructor(){
  
    this.columns = [
      new Column('Name', true, true, 'string'),
      new Column('Login', true, true, 'string'),
      new Column('Benutzergrupppe', true, true, 'string'),
    ];
    
  }

  clicked() {
    console.log('clicked');
  }
  search() {
    console.log('search');
  }

  all() {
    console.log('all');
  }

  reset() {
    console.log('reset');
  }

  saveUser(user: User) {
    console.log(user);
  }

}
