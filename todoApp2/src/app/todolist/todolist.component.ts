import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input() todos: Object[] = [];
  @Input() isUserPage: boolean;
  @Output() deleteEvent= new EventEmitter<number>();
  searchString: string;
  sortString: string = "id";
  constructor() { }
  deleteTodo(id){
    this.deleteEvent.emit(id);
  }
  ngOnInit() {
  }

}
