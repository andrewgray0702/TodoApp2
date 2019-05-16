import { Component, OnInit } from '@angular/core';
import { TodoServService } from '../todo-serv.service';
@Component({
  selector: 'app-todocomp',
  templateUrl: './todocomp.component.html',
  styleUrls: ['./todocomp.component.scss']
})
export class TodocompComponent implements OnInit {
  todo: Object = {task: '', username: ''};
  todos: Object[] = [];
  constructor(private todoService: TodoServService) {
    this.todos = this.todoService.allTodos;
  }
  addTodo(){
    this.todoService.addTodo(this.todo);
    this.todo = {task: '', username: ''};
    this.todos = this.todoService.allTodos;
  }
  ngOnInit() {
  }

}
