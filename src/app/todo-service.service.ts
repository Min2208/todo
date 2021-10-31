import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  listTodo: any[] = [];
  todo: any;
  constructor() { }

  addTodo(todo: any){
    this.listTodo.push(todo);
  }
  getListTodo(){
    return this.listTodo;
  }
  deleteTodo(todo: any){
    // @ts-ignore
    this.listTodo.pop(todo);
  }

  clickTodo(todo: any){
    this.todo = todo;
  }

  getTodo(){
    return this.todo;
  }
}
