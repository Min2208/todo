import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoFormComponent} from "./app-todo/todo-form/todo-form.component";
import {TodoListComponent} from "./app-todo/todo-list/todo-list.component";
import {DetailComponent} from "./app-todo/detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'todos/create',
    component: TodoFormComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todos/detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
