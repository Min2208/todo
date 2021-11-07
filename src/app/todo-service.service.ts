import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private idSeq: number = 0;
  listTodoChange = new EventEmitter<any>();
  listTodo: any[] = [];
  todoEdit: any;
  constructor() { }

  addTodo(todo: any) {
    if (!todo.id) {
      this.idSeq++;
      todo.id = this.idSeq;
      this.listTodo.push(todo);
    } else {
      for (let i=0; i<this.listTodo.length; i++) {
        if (this.listTodo[i].id == todo.id) {
          this.listTodo[i] = todo;
        }
      }
    }
    this.listTodoChange.emit(this.listTodo);
  }
  deleteTodo(todo: any){
    // @ts-ignore
    this.listTodo.pop(todo);
  }

  clickTodo(todo: any){
    this.todoEdit = todo;
  }

  detail(id: any){
    for (let i=0; i<this.listTodo.length; i++) {
      if (this.listTodo[i].id == id) {
        return this.listTodo[i];
      }
    }
  }
}
