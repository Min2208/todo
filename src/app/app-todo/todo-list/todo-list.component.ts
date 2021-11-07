import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from "../../todo-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo: any[] = [];
  todo: any;
  // @ts-ignore
  id: number;
  // @ts-ignore
  name: string;
  // @ts-ignore
  status: string;
  // @ts-ignore
  description: string;
  // @ts-ignore
  deadline: Date
  constructor(private service: TodoServiceService, private activateRoute: ActivatedRoute, private router : Router) {
    this.listTodo = this.service.listTodo;
  }

  ngOnInit(): void {
    this.service.listTodoChange.subscribe(list => {
      let now = new Date();
      for (let i=0; i< list.length; i++) {
        if (list[i].deadline < now) {
          list[i].status = "Expired";
        }
      }
      this.listTodo = list;
    })
  }

  onClickTodo(todo: any) {
    this.service.clickTodo(todo);
    this.router.navigate(['/todos/create']);
  }
  deleteTodo(todo: any) {
    this.service.deleteTodo(todo);
  }
  detailTodo(todo: any) {
    const queryParams = '/todos/detail/' + todo.id;
    this.router.navigate([queryParams]);
  }
}
