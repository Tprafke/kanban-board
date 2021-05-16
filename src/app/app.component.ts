import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Buy Milk',
      description: 'Go to the store and buy some milk'
    },
    {
      title: 'Create Kanban App',
      description: 'Use Firebase and Angular to create a Kanban App!'
    }
  ];
}
