 import { Component, OnInit, Input } from '@angular/core';
 import { Todo } from '../../classes/todo';
 import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  private todoText: string;
  
  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  private addTodo(): void {
    console.log("TODO:", this.todoText);

    this.todoService.addTodo(this.todoText);
    this.todoText = "";
  }
}
