import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  template: `<app-todo></app-todo>`
})
export class AppComponent {}