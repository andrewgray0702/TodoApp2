import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServService {
  private todos: Object[] = [];
  private nextID: number = 0;
  constructor() { }
  addTodo(todo: Object){
    todo['id'] = this.nextID;
    todo['completed'] = false;
    this.nextID++;
    this.todos.push(todo)
  }
  deleteTodo(id: number){
    let index = this.todos.findIndex(todo => todo['id'] === id);
    this.todos.splice(index, 1);
  }
  getByUsername(username){
    return this.todos.filter(todo => todo['username'] === username)
  }
  get allTodos(){
    return this.todos;
  }
}
