import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'note';
  todos = [
    {
      label: 'Bring Milk',
      done: false
    },
    {
      label: 'Pay Mobile Bills',
      done: true
    },
    {
      label: 'Clean House',
      done: false
    },
    {
      label: "Buy Books",
      done: true
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }



}
